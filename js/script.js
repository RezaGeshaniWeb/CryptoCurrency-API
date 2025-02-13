const list = document.querySelector('#list')
const loading= document.querySelector('.spinner-box') 

const chartUrl = {
    "bitcoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg',
    "ethereum": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg',
    "tether": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg',
    "solana": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg',
    "binancecoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg',
    "ripple": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg',
    "dogecoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/74.svg',
    "usd-coin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg',
    "staked-ether": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3890.svg',
    "cardano": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2010.svg',
    "tron": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1958.svg',
    "wrapped-bitcoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5994.svg',
    "avalanche-2": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5805.svg',
    "sui": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/9104.svg',
    "the-open-network": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11419.svg',
    "wrapped-steth": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/18876.svg',
    "stellar": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20947.svg',
    "bitcoin-cash": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1831.svg',
    "bitcoin-cash": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1831.svg',
    "litecoin": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/30126.svg',
    "chainlink": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1975.svg',
    'pepe': 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/24478.svg',
    "polkadot": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6636.svg',
    "leo-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6892.svg',
    "weth": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/512.svg',
    "hyperliquid": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6535.svg',
    "bitget-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2.svg',
    "aptos": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/21794.svg',
    "ethena-usde": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/29270.svg',
    "uniswap": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7083.svg',
    "usds": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33440.svg',
    "wrapped-eeth": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32880.svg',
    "hedera-hashgraph": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/6783.svg',
    "internet-computer": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7950.svg',
    "ondo-finance": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/32880.svg',
    "near": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/23095.svg',
    "monero": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/20396.svg',
    "render-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3890.svg',
    "bittensor": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/22974.svg',
    "aave": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5632.svg',
    "polygon-ecosystem-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7080.svg',
    "whitebit": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7431.svg',
    "dai": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4943.svg',
    "fetch-ai": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/28782.svg',
    "official-trump": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/33788.svg',
    "mantra-dao": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7950.svg',
    "susds": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11841.svg',
    "ethereum-classic": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg',
    "okb": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/11840.svg',
    "gatechain-token": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2280.svg',
    "mantle": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/27075.svg',
    "vechain": 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3077.svg',
}

getData()
function getData() {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
        .then(res => {
            if (res.ok) return res.json()
            Promise.reject()
        })
        .then(res => {
            loading.style.display = 'none'
            addToDOM(res)
        })
        .catch(() => loading.style.display = 'flex')
}

function addToDOM(data) {
    data.map((val, i) => {
        const chart = chartUrl[val.id]

        const ul = document.createElement('ul')
        ul.className = 'w-full h-full flex justify-between border-b border-b-gray-900 border-opacity-40 *:capitalize *:w-[17%] *:flex *:justify-center *:items-center *:h-[85px] *:font-semibold'
        ul.innerHTML = `
            <li>${i + 1}</li>
            <li class="flex items-center">
                <span class="flex justify-end w-[50%] pr-5"><img class="w-[35px]" src="${val.image}"></span>
                <span class="w-[50%] flex">${val.name}</span>    
            </li>
            <li>
                <span class="flex justify-end w-[50%] pr-5 capitalize">
                    <span class="bg-orange-400 rounded-md p-1 text-sm text-white">${val.symbol}</span>    
                </span>
                <span class="w-[50%] flex">$ ${val.current_price.toFixed(2)}</span> 
            </li>
            <li>$ ${val.high_24h.toFixed(2)}</li>
            <li>$ ${val.low_24h.toFixed(2)}</li>
            <li id="price_change">${val.price_change_percentage_24h.toFixed(2)}</li>
            <li><img id="img_chart" src="${chart}"></li>
        `
        list.append(ul)
        
        const price_change = document.querySelectorAll('#price_change')
        const img_chart = document.querySelectorAll('#img_chart')
        price_change.forEach((item, index) => {
            if (item.innerText <= 0) {
                item.classList.add('text-red-500')
                img_chart.forEach((img, i) => {
                    if (index == i) img.classList.add('filter-red')
                })
            } else {
                item.classList.add('text-green-500')
                img_chart.forEach((img, i) => {
                    if (index == i) img.classList.add('filter-green')
                })
            }
        })
    })
}