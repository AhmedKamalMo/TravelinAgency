#!/bin/bash
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
curl -k -X POST https://worldtripagency.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@wonderland.com","password":"admin123"}'

echo ""
echo "✅ Diagnostic complete!"
