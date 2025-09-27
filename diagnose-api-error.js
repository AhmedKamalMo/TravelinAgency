#!/usr/bin/env node

import fs from 'fs';

console.log('🔍 API ERROR DIAGNOSTIC SCRIPT');
console.log('==============================\n');

// Create diagnostic commands
const diagnosticScript = `#!/bin/bash
echo "🔍 DIAGNOSING API 500 ERROR"
echo "=========================="

echo ""
echo "1. 📋 Checking error logs..."
echo "----------------------------"
tail -20 error_log

echo ""
echo "2. 🔧 Testing PHP syntax..."
echo "--------------------------"
php -l api-handler.php

echo ""
echo "3. 📁 Checking file permissions..."
echo "---------------------------------"
ls -la api-handler.php

echo ""
echo "4. 🧪 Testing simple PHP file..."
echo "-------------------------------"
echo "<?php echo 'PHP is working'; ?>" > test-simple.php
chmod 644 test-simple.php
curl -k https://worldtripagency.com/test-simple.php

echo ""
echo "5. 🔍 Checking current API handler content..."
echo "--------------------------------------------"
head -20 api-handler.php

echo ""
echo "6. 🚀 Deploying working API handler..."
echo "------------------------------------"
cp api-handler-working.php api-handler.php
chmod 644 api-handler.php

echo ""
echo "7. 🧪 Testing API endpoints..."
echo "-----------------------------"
curl -k https://worldtripagency.com/api/test
echo ""
curl -k https://worldtripagency.com/api/packages
echo ""
curl -k -X POST https://worldtripagency.com/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{"email":"admin@wonderland.com","password":"admin123"}'

echo ""
echo "✅ Diagnostic complete!"
`;

fs.writeFileSync('diagnose-api-error.sh', diagnosticScript);
console.log('✅ Created: diagnose-api-error.sh');

console.log('\n📋 QUICK FIX COMMANDS:');
console.log('=====================');
console.log('Run these commands on your GoDaddy server:');
console.log('');
console.log('# Quick diagnostic and fix');
console.log('chmod +x diagnose-api-error.sh');
console.log('./diagnose-api-error.sh');
console.log('');
console.log('# Or run individual commands:');
console.log('tail -20 error_log');
console.log('php -l api-handler.php');
console.log('cp api-handler-working.php api-handler.php');
console.log('chmod 644 api-handler.php');
console.log('curl -k https://worldtripagency.com/api/test');
console.log('');
console.log('🎯 This will diagnose and fix the API 500 error!');
