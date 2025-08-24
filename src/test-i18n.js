/** 
 * Simple test for i18n functionality
 * This file tests the basic i18n functions to ensure they work correctly
 * @file test-i18n.js
 */

// Since this is running in a user script environment, we'll use a basic test approach
import { t, setLanguage, getCurrentLanguage, getAvailableLanguages } from './i18n.js';

/**
 * Run basic i18n tests
 */
function testI18n() {
  console.log('=== Blue Marble i18n Test Suite ===');
  
  // Test 1: Basic translation
  console.log('Test 1: Basic translation');
  const englishText = t('ui.enable');
  console.log(`English: ${englishText}`);
  console.assert(englishText === 'Enable', 'English translation should be "Enable"');
  
  // Test 2: Language switching
  console.log('\nTest 2: Language switching');
  setLanguage('zh-cn');
  const chineseText = t('ui.enable');
  console.log(`Chinese: ${chineseText}`);
  console.assert(chineseText === '启用', 'Chinese translation should be "启用"');
  
  // Test 3: Parameterized translation
  console.log('\nTest 3: Parameterized translation');
  const versionText = t('console.userscript_loaded', { version: '0.85.0' });
  console.log(`Version text: ${versionText}`);
  console.assert(versionText.includes('0.85.0'), 'Version text should include version number');
  
  // Test 4: Fallback to English
  console.log('\nTest 4: Fallback behavior');
  setLanguage('invalid-lang');
  const fallbackText = t('ui.enable');
  console.log(`Fallback: ${fallbackText}`);
  console.assert(fallbackText === 'Enable', 'Should fallback to English for invalid language');
  
  // Test 5: Available languages
  console.log('\nTest 5: Available languages');
  const languages = getAvailableLanguages();
  console.log(`Available languages: ${languages.join(', ')}`);
  console.assert(languages.includes('en'), 'Should include English');
  console.assert(languages.includes('zh-cn'), 'Should include Chinese');
  console.assert(languages.includes('ja'), 'Should include Japanese');
  
  // Test 6: Current language
  console.log('\nTest 6: Current language management');
  setLanguage('ja');
  const currentLang = getCurrentLanguage();
  console.log(`Current language: ${currentLang}`);
  console.assert(currentLang === 'ja', 'Current language should be Japanese');
  
  // Test 7: Japanese translation
  const japaneseText = t('ui.enable');
  console.log(`Japanese: ${japaneseText}`);
  console.assert(japaneseText === '有効にする', 'Japanese translation should be "有効にする"');
  
  // Reset to English for further use
  setLanguage('en');
  
  console.log('\n=== All i18n tests completed ===');
  console.log('If you see any assertion failures above, please check the i18n implementation.');
}

// Export for potential use in other contexts
export { testI18n };

// Auto-run tests if this file is loaded directly (for development)
if (typeof window !== 'undefined' && window.location) {
  // Delay execution to ensure i18n is properly initialized
  setTimeout(testI18n, 100);
}
