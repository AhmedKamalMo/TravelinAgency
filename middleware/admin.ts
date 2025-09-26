export default defineNuxtRouteMiddleware(async (to) => {
  console.log('🚀 Admin middleware called for:', to.path)
  
  // Skip middleware for login page to avoid redirect loops
  if (to.path === '/admin/login') {
    console.log('⏭️ Skipping middleware for login page')
    return
  }

  // Only run auth checks on client-side to avoid SSR issues
  if (process.server) {
    console.log('⏭️ Skipping auth check on server-side')
    return
  }
  
  const { user, checkAuth } = useAuth()

  // التحقق من وجود مستخدم مسجل
  let currentUser = user.value
  
  if (!currentUser) {
    console.log('👤 No user in state, checking auth...')
    try {
      currentUser = await checkAuth(true) // Use silent mode to avoid console noise
    } catch (error) {
      console.error('❌ Auth check failed:', error)
      return navigateTo('/admin/login')
    }
  } else {
    console.log('✅ User already authenticated from cookie:', currentUser.email)
  }

  // التحقق من المستخدم والصلاحيات مباشرة
  if (!currentUser || !currentUser.role || !['admin', 'super_admin', 'moderator'].includes(currentUser.role)) {
    console.log('❌ No authenticated admin user found, redirecting to login')
    return navigateTo('/admin/login')
  }
  
  console.log('✅ User has admin privileges:', currentUser.email, 'role:', currentUser.role)
  console.log('✅ Middleware completed successfully for:', to.path)
})
