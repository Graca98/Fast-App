

const PricingInfo = () => {
    return <>
        <section className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 lg:gap-6 lg:space-y-0">
                {/* VIP */}
                <div className="text-gray-900 bg-white rounded-lg border-2 border-yellow-300 shadow xl:p-8">
                    <h2>Skyblock VIP výhody</h2>
                    <ul>
                        <li>$2500 v neoznačených bankovkách ihned</li>
                        <li>Připojíš se na plný server</li>
                        <li>Při AFKování nebudeš vyhozen ze serveru</li>
                        <li>Používání CMI heal cedulek</li>
                        <li>Barevný text (pro nápovědu /colors, /colorpicker)</li>
                        <li>Tvorba ChestShopu zdarma</li>
                        <li>Nový VIP ostrov (více informací v bloku níže)</li>
                        <li>/is biome - (Desert, Nether, Jungle, Swamp, Snowy Plains)</li>
                    </ul>
                </div>
                {/* EVIP */}
                <div className="text-gray-900 bg-white rounded-lg border-2 border-cyan-400 shadow xl:p-8">
                    <h2>Skyblock EVIP výhody</h2>
                    <ul>
                        <li>Stejné jako VIP, k tomu navíc:</li>
                        <li>Dalších $2500 k tomu (celkem $5000)</li>
                        <li>Tvorba CMI heal cedulek</li>
                        <li>Formátování textu (pro nápovědu /colors)</li>
                        <li>Expy a itemy po smrti zůstávají</li>
                        <li>Nový EVIP ostrov (více informací v bloku níže)</li>
                        <li>/is biome - (Deep Ocean, Mushroom, The End, Badlands, Lush Caves)</li>
                        <li>/is settings - (Ovládání denní doby)</li>
                    </ul>
                </div>
                {/* Donator */}
                <div className="text-gray-900 bg-white rounded-lg border-2 border-purple-700 shadow xl:p-8">
                    <h2>Skyblock Donátor výhody</h2>
                    <ul>
                        <li>Stejné jako EVIP, k tomu navíc:</li>
                        <li>Speciální kit</li>
                        <li>blablabla blala blaaa</li>
                        <li>Používání CMI heal cedulek</li>
                        <li>Barevný text (pro nápovědu /colors, /colorpicker)</li>
                        <li>Tvorba ChestShopu zdarma</li>
                        <li>Nový VIP ostrov (více informací v bloku níže)</li>
                        <li>/is biome - (Desert, Nether, Jungle, Swamp, Snowy Plains)</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
}

export default PricingInfo