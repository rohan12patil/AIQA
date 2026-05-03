Playwright Test Cases — SauceDemo

Overview
Based on the plan.md, these test cases cover the end-to-end checkout flow and related checks. Tracing is required for each E2E test (trace saved to test-results/<test>-trace.zip).

TC001 — Login (happy path)
- Steps: navigate /, fill #user-name with 'standard_user', fill #password with 'secret_sauce', click #login-button
- Expected: redirected to /inventory.html, inventory container visible
- Selectors: #user-name, #password, #login-button, .inventory_list

TC002 — Add item to cart
- Steps: from inventory, click first .inventory_item button
- Expected: cart badge shows 1, .shopping_cart_link accessible
- Selectors: .inventory_item button, .shopping_cart_link, .shopping_cart_badge

TC003 — Checkout (complete)
- Steps: add item, open cart (.shopping_cart_link), click #checkout, fill #first-name,#last-name,#postal-code, click #continue, click #finish
- Expected: redirected to checkout-complete page with .complete-header text 'THANK YOU FOR YOUR ORDER'
- Selectors: #checkout, #first-name, #last-name, #postal-code, #continue, #finish, .complete-header

TC004 — Invalid login (negative)
- Steps: try login with invalid creds
- Expected: error message shown in .error-message-container

TC005 — Empty checkout fields validation
- Steps: begin checkout and submit with empty required fields
- Expected: validation/error shown and cannot continue

Notes
- Use tracing for TC001-003 and save under test-results.
- Use stable selectors where possible; fallback to text-based assertions.
- Run across chromium, firefox, webkit per plan.
