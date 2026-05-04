import { Then } from "@wdio/cucumber-framework"

Then(/^Inventory page should list (\d+)$/, async function (noOfProducts: number) {

    const eleArr = await $$('.inventory_item_name')

    await expect(eleArr).toBeElementsArrayOfSize(Number(noOfProducts))
})

Then(/^Validate all products have valid price$/, async function () {

    const eleArr = await $$('.inventory_item_price')

    let priceNumArr: number[] = []

    for (let i = 0; i < eleArr.length; i++) {
        const priceStr = await eleArr[i].getText()
        const price = parseFloat(priceStr.replace("$", ""))

        priceNumArr.push(price)
    }

    console.log(`Prices: ${priceNumArr}`)

    const invalidPrices = priceNumArr.filter(p => p <= 0 || isNaN(p))

    await expect(invalidPrices.length).toBe(0)
})