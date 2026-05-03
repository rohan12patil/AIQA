# Sauce Labs Demo Application - Comprehensive Test Plan

## Application Overview
**Website:** www.saucedemo.com
**Application Type:** E-commerce demo application for testing purposes
**Primary Functionality:** Product browsing, shopping cart management, and checkout

---

## Test Environment & Users

### Accepted Test Users
| Username | Password | Expected Behavior |
|----------|----------|-------------------|
| standard_user | secret_sauce | All features work normally |
| locked_out_user | secret_sauce | Login should fail with error message |
| problem_user | secret_sauce | Login succeeds but displays visual/data inconsistencies |
| performance_glitch_user | secret_sauce | Login succeeds with performance issues |
| error_user | secret_sauce | Login succeeds but shows errors in specific scenarios |
| visual_user | secret_sauce | Login succeeds but with visual glitches |

---

## Application Pages & Features Discovered

### 1. Login Page
- **URL:** https://www.saucedemo.com/
- **Elements:**
  - Username text field
  - Password text field
  - Login button
  - Credentials information display (for testing)

### 2. Inventory/Products Page
- **URL:** https://www.saucedemo.com/inventory.html
- **Features:**
  - Product grid display (6 products)
  - Product sorting dropdown (Name A-Z, Name Z-A, Price low-high, Price high-low)
  - Add to cart buttons
  - Shopping cart badge with item count
  - Navigation menu
  - Social media links (Twitter, Facebook, LinkedIn)

### 3. Product Detail Page
- **URL:** https://www.saucedemo.com/inventory-item.html?id={id}
- **Features:**
  - Product image
  - Product name
  - Product description
  - Product price
  - Add to cart button
  - Back to products button

### 4. Shopping Cart Page
- **URL:** https://www.saucedemo.com/cart.html
- **Features:**
  - Cart item list with quantity and description
  - Remove from cart buttons
  - Continue shopping button
  - Checkout button
  - Item prices and details

### 5. Checkout Step One
- **URL:** https://www.saucedemo.com/checkout-step-one.html
- **Features:**
  - First Name input field
  - Last Name input field
  - Zip/Postal Code input field
  - Cancel button
  - Continue button

### 6. Checkout Step Two (Review/Summary)
- **URL:** https://www.saucedemo.com/checkout-step-two.html
- **Features:**
  - Order summary with items and prices
  - Payment information display
  - Shipping information display
  - Price breakdown (Item total, Tax, Total)
  - Cancel button
  - Finish button

### 7. Order Confirmation Page
- **URL:** https://www.saucedemo.com/checkout-complete.html
- **Features:**
  - Success confirmation message
  - Order dispatched notification
  - Back Home button

### 8. Navigation Menu
- **Menu Items:**
  - All Items (returns to inventory page)
  - About (links to https://saucelabs.com/)
  - Logout
  - Reset App State (clears cart and resets application state)

---

## Product Catalog

### Available Products (6 total)
1. **Sauce Labs Backpack** - $29.99
   - Description: carry.allTheThings() with the sleek, streamlined Sly Pack...

2. **Sauce Labs Bike Light** - $9.99
   - Description: A red light isn't the desired state in testing...

3. **Sauce Labs Bolt T-Shirt** - $15.99
   - Description: Get your testing superhero on with the Sauce Labs bolt T-shirt...

4. **Sauce Labs Fleece Jacket** - $49.99
   - Description: It's not every day that you come across a midweight quarter-zip...

5. **Sauce Labs Onesie** - $7.99
   - Description: Rib snap infant onesie for the junior automation engineer...

6. **Test.allTheThings() T-Shirt (Red)** - $15.99
   - Description: This classic Sauce Labs t-shirt is perfect to wear...

---

## TEST SCENARIOS & TEST CASES

### **A. AUTHENTICATION & LOGIN TESTING**

#### A1: Valid Login - Standard User
- **Test Case:** TC-A1-001
- **User:** standard_user / secret_sauce
- **Expected Result:** Login successful, redirected to inventory page
- **Assertions:**
  - Page URL changes to /inventory.html
  - Products are displayed
  - No error messages shown

#### A2: Invalid Username
- **Test Case:** TC-A2-001
- **Input:** invalid_user / secret_sauce
- **Expected Result:** Login fails with error message
- **Assertions:**
  - Page remains on login page
  - Error message: "Epic sadface: Username and password do not match any user in this service"
  - Error icons displayed next to username field
  - Login button remains active

#### A3: Invalid Password
- **Test Case:** TC-A3-001
- **Input:** standard_user / wrong_password
- **Expected Result:** Login fails with error message
- **Assertions:**
  - Page remains on login page
  - Error message displayed
  - Error icons on password field

#### A4: Locked Out User
- **Test Case:** TC-A4-001
- **User:** locked_out_user / secret_sauce
- **Expected Result:** Login fails with specific error
- **Assertions:**
  - Error message: "Epic sadface: Sorry, this user has been locked out."
  - Error icons on username and password fields
  - User cannot proceed

#### A5: Problem User Login
- **Test Case:** TC-A5-001
- **User:** problem_user / secret_sauce
- **Expected Result:** Login successful, possible visual inconsistencies
- **Assertions:**
  - Page redirects to inventory page
  - Monitor for visual glitches or data inconsistencies

#### A6: Error User Login
- **Test Case:** TC-A6-001
- **User:** error_user / secret_sauce
- **Expected Result:** Login successful, monitor for errors
- **Assertions:**
  - Page redirects to inventory page
  - Monitor console for errors during transactions

#### A7: Performance Glitch User Login
- **Test Case:** TC-A7-001
- **User:** performance_glitch_user / secret_sauce
- **Expected Result:** Login successful with potential performance issues
- **Assertions:**
  - Page eventually loads
  - Monitor load times and performance

#### A8: Visual User Login
- **Test Case:** TC-A8-001
- **User:** visual_user / secret_sauce
- **Expected Result:** Login successful, may have visual issues
- **Assertions:**
  - Page redirects to inventory
  - Monitor visual rendering

---

### **B. PRODUCT BROWSING & INVENTORY TESTING**

#### B1: Product Display
- **Test Case:** TC-B1-001
- **Action:** Navigate to inventory page (logged in as standard_user)
- **Expected Result:** All 6 products displayed with images, names, descriptions, and prices
- **Assertions:**
  - Exactly 6 products visible
  - Each product has image, name, description, and price
  - All prices are displayed correctly

#### B2: Product Details Page
- **Test Case:** TC-B2-001
- **Action:** Click on a product name/image
- **Expected Result:** Navigate to product details page
- **Assertions:**
  - URL changes to /inventory-item.html?id={id}
  - Product information is displayed
  - Back button is available and functional

#### B3: View All Product Details
- **Test Case:** TC-B3-001
- **Action:** Click each of the 6 products to view details
- **Expected Result:** Each product page loads with correct information
- **Assertions:**
  - All product details match inventory listing
  - No 404 errors
  - Back button returns to inventory

---

### **C. SORTING & FILTERING TESTING**

#### C1: Sort by Name A to Z
- **Test Case:** TC-C1-001
- **Action:** Select "Name (A to Z)" from sort dropdown
- **Expected Result:** Products sorted alphabetically by name
- **Assertions:**
  - First product: Sauce Labs Backpack
  - Second: Sauce Labs Bike Light
  - Third: Sauce Labs Bolt T-Shirt
  - Fourth: Sauce Labs Fleece Jacket
  - Fifth: Sauce Labs Onesie
  - Last: Test.allTheThings() T-Shirt

#### C2: Sort by Name Z to A
- **Test Case:** TC-C2-001
- **Action:** Select "Name (Z to A)" from sort dropdown
- **Expected Result:** Products sorted in reverse alphabetical order
- **Assertions:**
  - First product: Test.allTheThings() T-Shirt
  - Last: Sauce Labs Backpack

#### C3: Sort by Price Low to High
- **Test Case:** TC-C3-001
- **Action:** Select "Price (low to high)" from sort dropdown
- **Expected Result:** Products sorted by price ascending
- **Assertions:**
  - First product: Sauce Labs Onesie ($7.99)
  - Second: Sauce Labs Bike Light ($9.99)
  - Third/Fourth: T-Shirts ($15.99)
  - Fifth: Sauce Labs Backpack ($29.99)
  - Last: Sauce Labs Fleece Jacket ($49.99)

#### C4: Sort by Price High to Low
- **Test Case:** TC-C4-001
- **Action:** Select "Price (high to low)" from sort dropdown
- **Expected Result:** Products sorted by price descending
- **Assertions:**
  - First product: Sauce Labs Fleece Jacket ($49.99)
  - Last: Sauce Labs Onesie ($7.99)

---

### **D. SHOPPING CART TESTING**

#### D1: Add Single Item to Cart
- **Test Case:** TC-D1-001
- **Action:** Click "Add to cart" on Sauce Labs Backpack
- **Expected Result:** Item added to cart, button changes to "Remove"
- **Assertions:**
  - Cart badge shows "1"
  - Button text changes from "Add to cart" to "Remove"
  - Product price is correct

#### D2: Add Multiple Items
- **Test Case:** TC-D2-002
- **Action:** Add 4 different products (Backpack, Bike Light, T-Shirt, Fleece Jacket)
- **Expected Result:** All items added, cart shows count of 4
- **Assertions:**
  - Cart badge displays "4"
  - All "Add to cart" buttons change to "Remove"
  - Items persist when switching pages

#### D3: Cart Badge Count Accuracy
- **Test Case:** TC-D3-001
- **Action:** Add items and verify cart count
- **Expected Result:** Cart badge accurately reflects number of items
- **Assertions:**
  - Count matches number of "Remove" buttons visible
  - Count accurate across all pages

#### D4: Remove Item from Cart
- **Test Case:** TC-D4-001
- **Action:** Add item, then click "Remove" button
- **Expected Result:** Item removed, button changes back to "Add to cart"
- **Assertions:**
  - Cart badge count decreases
  - Button text changes back to "Add to cart"

#### D5: View Cart Contents
- **Test Case:** TC-D5-001
- **Action:** Add 4 items, click cart icon
- **Expected Result:** Cart page displays all items
- **Assertions:**
  - URL: /cart.html
  - All 4 items displayed with quantities (QTY: 1 each)
  - Item descriptions visible
  - Prices correct
  - Remove buttons available

#### D6: Cart Item Removal on Cart Page
- **Test Case:** TC-D6-001
- **Action:** From cart page, click "Remove" on an item
- **Expected Result:** Item removed from cart
- **Assertions:**
  - Item no longer visible on cart page
  - Cart badge updated
  - Remaining items displayed correctly

#### D7: Continue Shopping from Cart
- **Test Case:** TC-D7-001
- **Action:** Add items to cart, go to cart page, click "Continue Shopping"
- **Expected Result:** Return to inventory page, cart items preserved
- **Assertions:**
  - Redirected to /inventory.html
  - Cart badge still shows item count
  - Items remain in cart

#### D8: Empty Cart Edge Case
- **Test Case:** TC-D8-001
- **Action:** Remove all items from cart
- **Expected Result:** Cart empty, no badge displayed
- **Assertions:**
  - Cart badge disappears when count reaches 0
  - "Checkout" button may be disabled

---

### **E. CHECKOUT PROCESS TESTING**

#### E1: Checkout with Valid Information
- **Test Case:** TC-E1-001
- **Steps:**
  - Add items: Backpack ($29.99), Bike Light ($9.99), T-Shirt ($15.99), Fleece Jacket ($49.99)
  - Click cart icon
  - Click Checkout
  - Fill: First Name = "John", Last Name = "Doe", ZIP = "12345"
  - Click Continue
  - Verify totals
  - Click Finish
- **Expected Result:** Order completes successfully
- **Assertions:**
  - Redirected to checkout-step-one.html
  - Form fields accept input
  - Progresses to checkout-step-two.html
  - Step 2 shows correct totals:
    - Item total: $105.96
    - Tax: $8.48
    - Total: $114.44
  - Redirected to checkout-complete.html
  - Confirmation message: "Thank you for your order!"

#### E2: Checkout Step 1 - Form Validation
- **Test Case:** TC-E2-001
- **Action:** Attempt checkout with missing fields
- **Expected Result:** Form validates required fields
- **Assertions:**
  - Submit fails if any required field is empty
  - Appropriate error messages displayed

#### E3: Checkout Step 1 - Special Characters in Input
- **Test Case:** TC-E3-001
- **Action:** Enter special characters in name/zip fields
- **Expected Result:** Form accepts or properly validates input
- **Assertions:**
  - Special characters handled appropriately
  - No XSS vulnerabilities

#### E4: Checkout Review Summary
- **Test Case:** TC-E4-001
- **Action:** Complete step 1, review step 2
- **Expected Result:** All order details displayed correctly
- **Assertions:**
  - Product names and prices correct
  - Quantity displayed (QTY: 1 for each)
  - Descriptions showing
  - Payment info: "SauceCard #31337"
  - Shipping: "Free Pony Express Delivery!"

#### E5: Checkout Cancel Operations
- **Test Case:** TC-E5-001
- **Action:** At step 1, click Cancel; at step 2, click Cancel
- **Expected Result:** Return to cart page without processing
- **Assertions:**
  - Redirected to /cart.html
  - Items still in cart
  - No order placed

#### E6: Order Confirmation
- **Test Case:** TC-E6-001
- **Action:** Complete full checkout
- **Expected Result:** Confirmation page displays with order details
- **Assertions:**
  - URL: /checkout-complete.html
  - Heading: "Checkout: Complete!"
  - Message: "Thank you for your order!"
  - Pony Express image displayed
  - "Back Home" button available

#### E7: Back Home from Confirmation
- **Test Case:** TC-E7-001
- **Action:** From confirmation page, click "Back Home"
- **Expected Result:** Return to inventory page, cart cleared
- **Assertions:**
  - Redirected to /inventory.html
  - Cart badge no longer displayed or shows 0

---

### **F. NAVIGATION & MENU TESTING**

#### F1: Menu Open/Close
- **Test Case:** TC-F1-001
- **Action:** Click hamburger menu button
- **Expected Result:** Menu slides in from left
- **Assertions:**
  - Menu overlays content
  - Menu items visible: All Items, About, Logout, Reset App State
  - Close button available

#### F2: All Items Menu Link
- **Test Case:** TC-F2-001
- **Action:** From any page, open menu and click "All Items"
- **Expected Result:** Navigate to inventory page
- **Assertions:**
  - URL: /inventory.html
  - All products displayed
  - Menu closes automatically

#### F3: About Link
- **Test Case:** TC-F3-001
- **Action:** Click "About" in menu
- **Expected Result:** Navigate to about page
- **Assertions:**
  - URL changes to external Sauce Labs site
  - New page/tab opens with Sauce Labs info

#### F4: Logout Function
- **Test Case:** TC-F4-001
- **Action:** Click "Logout" from menu
- **Expected Result:** User logged out, redirected to login page
- **Assertions:**
  - Redirected to /
  - Login form displayed
  - Session cleared (cannot access inventory without re-login)

#### F5: Reset App State
- **Test Case:** TC-F5-001
- **Action:** Add items to cart, then click "Reset App State"
- **Expected Result:** Cart cleared, application state reset
- **Assertions:**
  - Cart badge disappears
  - No items in cart
  - Stays on current page (inventory)

#### F6: Menu Close Button
- **Test Case:** TC-F6-001
- **Action:** Open menu, click close button
- **Expected Result:** Menu closes
- **Assertions:**
  - Menu slides out
  - Page content fully visible

---

### **G. SESSION & PERSISTENCE TESTING**

#### G1: Session Persistence After Actions
- **Test Case:** TC-G1-001
- **Action:** Add items, navigate pages, add more items
- **Expected Result:** Cart items persist across pages
- **Assertions:**
  - Items in cart remain when switching between pages
  - Cart badge accurate across all pages

#### G2: Session Timeout/Logout
- **Test Case:** TC-G2-001
- **Action:** Logout and try accessing inventory URL directly
- **Expected Result:** Redirect to login page
- **Assertions:**
  - Cannot access /inventory.html directly without login
  - Redirected to login page

#### G3: Back Button After Logout
- **Test Case:** TC-G3-001
- **Action:** Logout and use browser back button
- **Expected Result:** Cannot return to previous user session
- **Assertions:**
  - Stays on login page
  - Cannot access protected pages

---

### **H. USER-SPECIFIC TESTING (Problem Accounts)**

#### H1: Problem User - Visual Issues
- **Test Case:** TC-H1-001
- **User:** problem_user
- **Action:** Login and browse products
- **Expected Result:** Possible visual inconsistencies
- **Assertions:**
  - Monitor for layout issues
  - Check element alignment
  - Verify text rendering

#### H2: Performance Glitch User
- **Test Case:** TC-H2-001
- **User:** performance_glitch_user
- **Action:** Complete a full shopping flow
- **Expected Result:** May experience slow load times
- **Assertions:**
  - Monitor page load times
  - Track response times for actions
  - Verify all functionality works despite delays

#### H3: Error User - Error Scenarios
- **Test Case:** TC-H3-001
- **User:** error_user
- **Action:** Proceed through checkout
- **Expected Result:** May encounter errors in specific flows
- **Assertions:**
  - Monitor console for errors
  - Check if errors prevent completion
  - Verify error messages are user-friendly

#### H4: Visual User - Visual Defects
- **Test Case:** TC-H4-001
- **User:** visual_user
- **Action:** Browse inventory and products
- **Expected Result:** Visual rendering issues possible
- **Assertions:**
  - Check image rendering
  - Verify text visibility
  - Look for CSS/styling problems

---

### **I. DATA VALIDATION & ERROR HANDLING**

#### I1: Price Accuracy
- **Test Case:** TC-I1-001
- **Action:** Add items and verify totals at checkout
- **Expected Result:** Prices correctly calculated with tax
- **Assertions:**
  - Item total: $105.96 (for the 4 test items)
  - Tax: $8.48
  - Total: $114.44
  - Math verified: ($29.99 + $9.99 + $15.99 + $49.99) × 1.08 ≈ $114.44

#### I2: Cart Total Consistency
- **Test Case:** TC-I2-001
- **Action:** Add/remove items and check cart total updates
- **Expected Result:** Total updates correctly with each change
- **Assertions:**
  - Adding/removing items updates totals
  - No stale data displayed

---

### **J. CROSS-BROWSER & RESPONSIVE TESTING**

#### J1: Product Grid Responsiveness
- **Test Case:** TC-J1-001
- **Action:** View inventory on different screen sizes
- **Expected Result:** Products display appropriately
- **Assertions:**
  - All products visible (may be in different layouts)
  - Images load correctly
  - Buttons are clickable

#### J2: Checkout Form Usability
- **Test Case:** TC-J2-001
- **Action:** Fill checkout form on different devices
- **Expected Result:** Form is usable and fields accessible
- **Assertions:**
  - Input fields properly sized
  - Buttons accessible
  - No text overflow

---

### **K. FOOTER & EXTERNAL LINKS TESTING**

#### K1: Social Media Links
- **Test Case:** TC-K1-001
- **Action:** Click Twitter, Facebook, LinkedIn links in footer
- **Expected Result:** Links open to correct social media pages
- **Assertions:**
  - Twitter: https://twitter.com/saucelabs
  - Facebook: https://www.facebook.com/saucelabs
  - LinkedIn: https://www.linkedin.com/company/sauce-labs/

#### K2: Footer Information
- **Test Case:** TC-K2-001
- **Action:** Verify footer content on all pages
- **Expected Result:** Footer displays consistently
- **Assertions:**
  - Copyright notice: "© 2026 Sauce Labs. All Rights Reserved."
  - Links to Terms of Service and Privacy Policy

---

### **L. EDGE CASES & BOUNDARY TESTING**

#### L1: Zip Code Format Validation
- **Test Case:** TC-L1-001
- **Action:** Test various zip code formats (numeric, alphanumeric, special chars)
- **Expected Result:** Form accepts reasonable formats
- **Assertions:**
  - Standard format (12345) accepted
  - Extended format (12345-6789) accepted
  - Invalid formats handled appropriately

#### L2: Name Field Length
- **Test Case:** TC-L2-001
- **Action:** Test very long names or special characters
- **Expected Result:** Form accepts or validates appropriately
- **Assertions:**
  - Reasonable name lengths accepted
  - XSS attempts prevented

#### L3: Empty Cart Checkout
- **Test Case:** TC-L3-001
- **Action:** Clear cart and attempt checkout
- **Expected Result:** Checkout prevented or allowed based on design
- **Assertions:**
  - Either prevents empty checkout or shows appropriate message

---

## Test Execution Priority

### Priority 1 (Critical - Must Pass)
- TC-A1-001: Valid Login
- TC-D1-001: Add Item to Cart
- TC-D5-001: View Cart
- TC-E1-001: Complete Checkout
- TC-F4-001: Logout Function

### Priority 2 (High - Should Pass)
- TC-A2-001 to TC-A4-001: Login Error Cases
- TC-B1-001: Product Display
- TC-C1-001 to TC-C4-001: Sorting Functionality
- TC-D2-002 to TC-D7-001: Cart Management
- TC-E2-001 to TC-E7-001: Checkout Variations

### Priority 3 (Medium - Nice to Have)
- TC-H1-001 to TC-H4-001: Problem User Testing
- TC-I1-001 to TC-I2-001: Data Validation
- TC-J1-001 to TC-J2-001: Responsive Testing
- TC-K1-001 to TC-K2-001: External Links

---

## Test Metrics & Success Criteria

- **Pass Rate Target:** 100% for Priority 1 test cases
- **Pass Rate Target:** 95%+ for Priority 2 test cases
- **Pass Rate Target:** 90%+ for Priority 3 test cases
- **No Critical Bugs:** Zero critical bugs before production
- **No Data Loss:** Cart data persists correctly across sessions
- **Performance:** Page loads within 2 seconds on normal connections

---

## Known Issues / Notes

1. **Problem User Account:** Expected to have visual/display inconsistencies
2. **Error User Account:** May show errors in specific scenarios
3. **Performance Glitch User:** Expected slow load times
4. **Visual User Account:** May have CSS/rendering issues
5. **Locked Out User:** Expected to always fail authentication
6. **About Link (problem_user):** Points to error page URL (https://saucelabs.com/error/404)

---

## Test Automation Recommendations

- Use Playwright/Selenium for cross-browser automation
- Create data-driven tests for different user accounts
- Implement visual regression testing for visual_user account
- Monitor performance metrics for performance_glitch_user
- Validate error messages for error_user account
- Use headless browser for CI/CD pipeline integration

---

## Conclusion

The Sauce Labs Demo application is a comprehensive testing platform with multiple user scenarios, shopping functionality, and edge cases to test. This test plan covers all major features including authentication, product browsing, shopping cart management, checkout process, navigation, and user-specific test cases designed to validate different testing scenarios.
