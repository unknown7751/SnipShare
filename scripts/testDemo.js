// Test script for demo functionality
// Run this in the browser console or as a Node.js script

async function testDemoAPI() {
  console.log('🧪 Testing Demo API...');
  
  try {
    // Test GET endpoint
    const getResponse = await fetch('/api/demo');
    const getData = await getResponse.json();
    console.log('✅ GET /api/demo:', getData);
    
    // Test POST endpoint
    const postResponse = await fetch('/api/demo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const postData = await postResponse.json();
    console.log('✅ POST /api/demo:', postData);
    
    return postData.success;
  } catch (error) {
    console.error('❌ Demo API test failed:', error);
    return false;
  }
}

async function testDemoSnippets() {
  console.log('🧪 Testing Demo Snippets...');
  
  const demoIds = [
    'tFOrJEARI2SbxKQR92PF',
    'pythonDemo123',
    'javaDemo456',
    'cppDemo789'
  ];
  
  const results = [];
  
  for (const id of demoIds) {
    try {
      const response = await fetch(`/s/${id}`);
      const exists = response.ok;
      results.push({ id, exists });
      console.log(`${exists ? '✅' : '❌'} Demo snippet ${id}: ${exists ? 'EXISTS' : 'NOT FOUND'}`);
    } catch (error) {
      results.push({ id, exists: false, error: error.message });
      console.log(`❌ Demo snippet ${id}: ERROR - ${error.message}`);
    }
  }
  
  return results;
}

async function testDemoPage() {
  console.log('🧪 Testing Demo Page...');
  
  try {
    const response = await fetch('/demo');
    const exists = response.ok;
    console.log(`${exists ? '✅' : '❌'} Demo page: ${exists ? 'ACCESSIBLE' : 'NOT FOUND'}`);
    return exists;
  } catch (error) {
    console.error('❌ Demo page test failed:', error);
    return false;
  }
}

async function testAdminPage() {
  console.log('🧪 Testing Admin Page...');
  
  try {
    const response = await fetch('/admin/demo');
    const exists = response.ok;
    console.log(`${exists ? '✅' : '❌'} Admin page: ${exists ? 'ACCESSIBLE' : 'NOT FOUND'}`);
    return exists;
  } catch (error) {
    console.error('❌ Admin page test failed:', error);
    return false;
  }
}

// Main test function
async function runAllTests() {
  console.log('🚀 Starting Demo Functionality Tests...\n');
  
  const results = {
    api: await testDemoAPI(),
    snippets: await testDemoSnippets(),
    demoPage: await testDemoPage(),
    adminPage: await testAdminPage()
  };
  
  console.log('\n📊 Test Results Summary:');
  console.log('API Endpoint:', results.api ? '✅ PASS' : '❌ FAIL');
  console.log('Demo Page:', results.demoPage ? '✅ PASS' : '❌ FAIL');
  console.log('Admin Page:', results.adminPage ? '✅ PASS' : '❌ FAIL');
  
  const snippetResults = results.snippets.filter(r => r.exists);
  console.log(`Demo Snippets: ${snippetResults.length}/${results.snippets.length} ✅ PASS`);
  
  const allPassed = results.api && results.demoPage && results.adminPage && 
                   snippetResults.length === results.snippets.length;
  
  console.log(`\n${allPassed ? '🎉 ALL TESTS PASSED!' : '⚠️  SOME TESTS FAILED'}`);
  
  return results;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    testDemoAPI,
    testDemoSnippets,
    testDemoPage,
    testAdminPage,
    runAllTests
  };
}

// Auto-run if in browser
if (typeof window !== 'undefined') {
  window.testDemoFunctionality = runAllTests;
  console.log('Demo test functions available. Run testDemoFunctionality() to start testing.');
} 