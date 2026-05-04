Feature: Inventory

@demo
Scenario: Demo Inventory

    Given As a standard user I login to inventory web app
        | UserType | Username      |
        | StdUser  | standard_user |

    Then Inventory page should list 6
    Then Validate all products have valid price   