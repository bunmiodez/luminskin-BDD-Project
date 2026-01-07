Feature: Buying Product on LuminSkin website

  Scenario Outline: User should be able to add a product to a cart

    Given User is on LuminSkin homepage
    When user clicks on the country currency selector
    And user clicks on the country currency and selects US from dropdown
    And clicks on the submit button
    And User clicks the search bar link
    And types in "<Product>" in the "#Search" text area
    And clicks "<Suggestion>" from the autocomplete suggestions
    # And types in "Mask" in the "#Search" text area
    # And clicks "Luminator LED Eye Mask" from the autocomplete suggestions
    Then clicks add to cart button

    Examples:
      | Product     | Suggestion               |
      | mask        | Luminator LED Eye Mask   |
      | shampoo     | Deep Cleanse Shampoo Bar |
      | cream       | Dark Circle Defense Balm |
      | Cleanser    | Deep Cleanse Shampoo Bar |
      | Moisturizer | Super Light Moisturizer  |




