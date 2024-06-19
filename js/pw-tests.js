//todo input toHaveAttribute('required', value, name, atd...) - prostě ověřit zda jsou required


let date = new Date();

// Dnešní datum
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let formattedDate = `${day}. ${month}. ${year}`;

// Aktuální čas
let hours = date.getHours();
let minutes = date.getMinutes();

// Přidání jedné hodiny
date.setHours(hours + 1);
let hoursPlusOne = date.getHours();

// Formátování hodin a minut s předponou 0, pokud je hodnota menší než 10
let formattedHours = hours < 10 ? '0' + hours : hours;
let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
let formattedHoursPlusOne = hoursPlusOne < 10 ? '0' + hoursPlusOne : hoursPlusOne;

// Formátování času
let formattedTime = `${formattedHours}:${formattedMinutes}`;
let timePlusOneHour = `${formattedHoursPlusOne}:${formattedMinutes}`;




test.beforeEach(async ({ page }) => {
    await page.goto('https://app.votify.app/cs/calendar?tenant=0778f424-95fe-4738-8691-cd9b868d0a16')
    // Tlačítko kalendáře
    await page.getByTestId('goToCalendarLayoutAction').click()
    // tlačítko nová událost
    await page.getByTestId('newEventAction').click()

})

test('kontrola nadpisu', async({ page }) => {
    await expect(page.locator('span', {hasText: 'Vytvoření nové události'})).toBeVisible()
})

test.describe('Test formuláře na přidání události', async({ page }) => {
    test('form by neměl jít odeslat bez vyplnění', async({ page }) => {
        // Pokus odeslat formulář bez vyplnění
        await page.getByTestId('saveRecordAction').click()

        // Ověř, že se zobrazí chybová zpráva u povinného pole
        await expect(page.getByTestId('recordTitleInput')).toHaveText('Povinné')
    })

    test('formulář by měl mít vyplněný dnešní datum', async({ page }) => {
        const locator = page.getByText('Počáteční datum')

        await expect(locator).toContainText(formattedDate)
    })
})

