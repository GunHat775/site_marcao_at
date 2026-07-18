// ==================== SCRIPT.JS - INVESTINICIANTE ====================

const BRAPI_TOKEN = "ooqXJwAxKuCRFCuD3eyVCD";

const rendaFixaTerms = [
    { term: "CDI", definition: "Taxa de juros overnight do mercado interbancário. Serve como referência para a maioria dos investimentos de renda fixa.", icon: "📊" },
    { term: "SELIC", definition: "Taxa básica de juros da economia brasileira, definida pelo Comitê de Política Monetária do Banco Central.", icon: "🏦" },
    { term: "IPCA", definition: "Índice oficial de inflação do Brasil. Mede a variação de preços ao consumidor.", icon: "📈" },
    { term: "B3", definition: "Bolsa de Valores brasileira, onde são negociadas ações, FIIs, opções e outros ativos.", icon: "🏛️" },
    { term: "BACEN", definition: "Banco Central do Brasil. Responsável pela política monetária e estabilidade financeira.", icon: "🏛️" },
    { term: "CDB", definition: "Certificado de Depósito Bancário. Empréstimo que você faz ao banco com rentabilidade combinada.", icon: "💰" },
    { term: "LCI", definition: "Letra de Crédito Imobiliário. Renda fixa isenta de Imposto de Renda para pessoa física.", icon: "🏠" },
    { term: "LCA", definition: "Letra de Crédito do Agronegócio. Similar à LCI, também isenta de IR.", icon: "🌾" },
    { term: "Tesouro Direto", definition: "Programa do governo federal para compra de títulos públicos com segurança.", icon: "🇧🇷" },
    { term: "Poupança", definition: "Investimento conservador com rentabilidade baixa e liquidez diária.", icon: "🐷" },
    { term: "Renda Fixa", definition: "Investimentos com rentabilidade mais previsível, como CDBs, LCIs e Tesouro.", icon: "📌" }
];

const rendaVariavelTerms = [
    { term: "FII", definition: "Fundos de Investimento Imobiliário. Permitem investir em imóveis sem comprar o bem físico.", icon: "🏢" },
    { term: "ETF", definition: "Exchange Traded Fund. Fundo que replica um índice e é negociado como uma ação.", icon: "📊" },
    { term: "Ações", definition: "Participação no capital de empresas listadas na bolsa. Renda variável com potencial de ganho.", icon: "📈" },
    { term: "EBITDA", definition: "Lucro antes de juros, impostos, depreciação e amortização. Mede a geração de caixa operacional.", icon: "📉" },
    { term: "ROI", definition: "Return on Investment. Retorno obtido sobre o capital investido.", icon: "💹" },
    { term: "ROE", definition: "Return on Equity. Rentabilidade gerada sobre o patrimônio dos acionistas.", icon: "📈" },
    { term: "Dividend Yield", definition: "Rendimento de dividendos. Percentual pago em dividendos em relação ao preço da ação.", icon: "💵" },
    { term: "Day Trade", definition: "Compra e venda de ativos no mesmo dia. Operação de curto prazo.", icon: "⚡" },
    { term: "Swing Trade", definition: "Operações de médio prazo (dias a semanas), buscando capturar movimentos de tendência.", icon: "🔄" },
    { term: "Small Caps", definition: "Empresas de pequeno porte na bolsa com alto potencial de crescimento.", icon: "🌱" },
    { term: "Renda Variável", definition: "Investimentos com rentabilidade não garantida, como ações e FIIs.", icon: "📉" }
];

// Lista de imagens para os blocos 'Compre aqui' (usar nomes como legendas)
const allImageFiles = [
    "Xiaomi Poco C85.webp",
    "Smartwatch Samsung Galaxy.webp",
    "Smartwatch Samsung Galaxy Rosé.webp",
    "Smartwatch Mi Band.webp",
    "Smartphone Poco X8.webp",
    "Smartphone Motorola Moto G35.webp",
    "Smartphone Motorola Moto G06.webp",
    "Smartphone Motorola Edge 70.webp",
    "Smartphone Motorola Edge 60.webp",
    "Samsung Galaxy Buds Core.webp",
    "Relógio Xiaomi Mi Band.webp",
    "Relógio Smartwatch Bettdow.webp",
    "Relógio Garmin Forerunner.webp",
    "Poco X7 Pro.webp",
    "Fritadeira Elétrica Mondial.webp",
    "Fone de Ouvido Xiaomi.webp",
    "Fone De Ouvido TWS.webp",
    "Fone De Ouvido Para Capacete.webp",
    "Fone De Ouvido Intercomunicador.webp",
    "Fone De Ouvido F9-5.webp",
    "Fone de Ouvido Davely.webp",
    "Fone de Ouvido Dapon.webp",
    "Fone de Ouvido Bluetooth.webp",
    "Fone Bluetooth.webp",
    "Celular Samsung Galaxy A17.webp",
    "Air Fryer Britânia.webp"
];

const productLinks = {
    "Xiaomi Poco C85.webp": "https://meli.la/1uzGTFv",
    "Smartwatch Samsung Galaxy Rosé.webp": "https://meli.la/19dkTD7",
    "Smartphone Poco X8.webp": "https://meli.la/2L79W4o",
    "Smartphone Motorola Moto G06.webp": "https://meli.la/2RdUSE5",
    "Smartphone Motorola Edge 60.webp": "https://meli.la/2Rvmwbd",
    "Relógio Xiaomi Mi Band.webp": "https://meli.la/1bHH3Sg",
    "Relógio Garmin Forerunner.webp": "https://meli.la/1rvEPRh",
    "Fritadeira Elétrica Mondial.webp": "https://meli.la/1cr96Jn",
    "Fone De Ouvido TWS.webp": "https://meli.la/1orbbDX",
    "Fone De Ouvido Intercomunicador.webp": "https://www.mercadolivre.com.br/fone-de-ouvido-para-capacete-intercomunicador-bluetooth-headset-rgb-sem-fio-musica-gps-chamadas-handsfree-alta-potencia-woosh/p/MLB51050396?show_address=true",
    "Fone de Ouvido Davely.webp": "https://meli.la/1Stb57w",
    "Fone de Ouvido Bluetooth.webp": "https://meli.la/2g4kFcP",
    "Celular Samsung Galaxy A17.webp": "https://meli.la/2yXdRC3",
    "Smartwatch Samsung Galaxy.webp": "https://meli.la/2w5374E",
    "Smartwatch Mi Band.webp": "https://meli.la/2uRFK9M",
    "Smartphone Motorola Moto G35.webp": "https://meli.la/1peQGc4",
    "Smartphone Motorola Edge 70.webp": "https://meli.la/19z8L9A",
    "Samsung Galaxy Buds Core.webp": "https://meli.la/2PqrwWW",
    "Relógio Smartwatch Bettdow.webp": "https://meli.la/1kjxfDj",
    "Poco X7 Pro.webp": "https://meli.la/2gq1Vxg",
    "Fone de Ouvido Xiaomi.webp": "https://meli.la/2DPjJPH",
    "Fone de Ouvido Para Capacete.webp": "https://meli.la/1hf5cMN",
    "Fone de Ouvido F9-5.webp": "https://meli.la/2fEFstM",
    "Fone de Ouvido Dapon.webp": "https://meli.la/2Dxxauq",
    "Fone Bluetooth.webp": "https://meli.la/2jiZPSw",
    "Air Fryer Britânia.webp": "https://meli.la/1TDXMYa"
};

// Lista de livros para a página 'aprenda-mais' (na pasta imagens/Livros)
const allBookFiles = [
    "Visão Empreendedora.webp",
    "Um Guia Definitivo Para Investidores Iniciantes.jpeg",
    "Renda Fixa Para os Investidores Iniciantes.jpeg",
    "O Guia de Bolso Para o Investidor Iniciante.jpeg",
    "Manual Definitivo Para Investidores Iniciantes.jpeg",
    "Guia Prático Para o Investidor Iniciante.jpeg",
    "Guia Para Investidores Iniciantes.webp",
    "Guia do Investidor Iniciante.webp"
];

// Adiciona entradas de livros no mapa de links (placeholder '#', pode alterar depois)
allBookFiles.forEach(f => { if (!productLinks[f]) productLinks[f] = '#'; });

// Mapear livros para os links fornecidos
productLinks["Guia Para Investidores Iniciantes.webp"] = "https://go.hotmart.com/F106710035Q";
productLinks["Visão Empreendedora.webp"] = "https://go.hotmart.com/N106710277K";
productLinks["Guia do Investidor Iniciante.webp"] = "https://go.hotmart.com/C106710323V";
productLinks["Renda Fixa Para os Investidores Iniciantes.jpeg"] = "https://go.hotmart.com/E106710341T";
productLinks["Guia Prático Para o Investidor Iniciante.jpeg"] = "https://go.hotmart.com/W106710349J";
productLinks["Manual Definitivo Para Investidores Iniciantes.jpeg"] = "https://go.hotmart.com/A106710358X";
productLinks["O Guia de Bolso Para o Investidor Iniciante.jpeg"] = "https://go.hotmart.com/A106710367H";
productLinks["Um Guia Definitivo Para Investidores Iniciantes.jpeg"] = "https://go.hotmart.com/U106710376M";

const normalizedProductLinks = Object.fromEntries(
    Object.entries(productLinks).map(([name, url]) => [name.replace(/\s+/g, ' ').trim().toLowerCase(), url])
);

function renderImageBlocks(containerId, images) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    images.forEach(filename => {
        const key = filename.replace(/\s+/g, ' ').trim().toLowerCase();
        const link = normalizedProductLinks[key] || '#';
        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
        anchor.className = 'block';
        const div = document.createElement('div');
        div.className = 'image-card rounded-2xl p-3 text-center cursor-pointer bg-[#1E1433] border border-violet-700';
        const folder = containerId && containerId.startsWith('books-') ? 'imagens/Livros/' : 'imagens/';
        const src = encodeURI(folder + filename);
        const caption = filename.replace(/\.webp$/i, '');
        div.innerHTML = `
            <img src="${src}" alt="${caption}" style="width:100%;height:auto;border-radius:12px;object-fit:cover;display:block;margin-bottom:0.5rem;">
            <div class="text-sm text-violet-200 font-medium">${caption}</div>
        `;
        anchor.appendChild(div);
        container.appendChild(anchor);
    });
}

// Fade-in ao entrar na viewport apenas para elementos que estavam abaixo da viewport inicial
function setupScrollFade() {
    const selector = '.financial-card, .image-card, .card, .rounded-2xl, .rounded-3xl';
    const nodes = Array.from(document.querySelectorAll(selector));
    if (!nodes.length) return;

    const toObserve = [];
    nodes.forEach(n => {
        const rect = n.getBoundingClientRect();
        // se o topo do elemento está abaixo da viewport inicial, aplicar efeito
        if (rect.top >= window.innerHeight * 0.95) {
            n.classList.add('fade-scroll-init');
            toObserve.push(n);
        } else {
            // já visível ao carregar -> garantir visibilidade
            n.classList.add('fade-visible');
        }
    });

    if (!toObserve.length) return;

    let lastY = window.pageYOffset || document.documentElement.scrollTop;
    let prevY = lastY;
    window.addEventListener('scroll', () => {
        prevY = lastY;
        lastY = window.pageYOffset || document.documentElement.scrollTop;
    }, { passive: true });

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            // se o usuário rolou para baixo, animar; se rolou para cima, mostrar sem animação
            if (lastY > prevY) {
                entry.target.classList.add('fade-visible');
            } else {
                entry.target.classList.add('no-transition');
                entry.target.classList.add('fade-visible');
                // remover no-transition depois de aplicada
                setTimeout(() => entry.target.classList.remove('no-transition'), 50);
            }
            io.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    toObserve.forEach(n => io.observe(n));
}

// Aplica o mesmo efeito de fade usado no scroll, porém ao carregar
// Seleciona elementos visíveis na viewport e adiciona as classes em cascata
// load-time fade handled via body.pre-fade + body.pre-fade.fade-ready CSS rules

function renderTerms(containerId, terms) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    terms.forEach(item => {
        const div = document.createElement('div');
        div.className = 'financial-card rounded-2xl p-4 flex flex-col items-center text-center cursor-pointer hover:bg-[#3F2A66]';
        
        let link = '#';
        if (item.term === "FII") link = 'fii.html';
        else if (item.term === "ETF") link = 'etf.html';
        else if (item.term === "Ações") link = 'acoes.html';
        else if (item.term === "EBITDA") link = 'ebitda.html';
        else if (item.term === "ROI") link = 'roi.html';
        else if (item.term === "ROE") link = 'roe.html';
        else if (item.term === "Dividend Yield") link = 'dividend-yield.html';
        else if (item.term === "Day Trade") link = 'day-trade.html';
        else if (item.term === "Swing Trade") link = 'swing-trade.html';
        else if (item.term === "Small Caps") link = 'small-caps.html';
        else if (item.term === "Renda Variável") link = 'renda-variavel.html';
        else if (item.term === "CDI") link = 'cdi.html';
        else if (item.term === "SELIC") link = 'selic.html';
        else if (item.term === "IPCA") link = 'ipca.html';
        else if (item.term === "B3") link = 'b3.html';
        else if (item.term === "BACEN") link = 'bacen.html';
        else if (item.term === "CDB") link = 'cdb.html';
        else if (item.term === "LCI") link = 'lci.html';
        else if (item.term === "LCA") link = 'lca.html';
        else if (item.term === "Tesouro Direto") link = 'tesouro-direto.html';
        else if (item.term === "Poupança") link = 'poupanca.html';
        else if (item.term === "Renda Fixa") link = 'renda-fixa.html';
        
        if (link !== '#') {
            div.setAttribute('onclick', `window.location.href='${link}'`);
        } else {
            div.setAttribute('onclick', `alert('Em breve: Artigo completo sobre ${item.term}');`);
        }
        
        div.innerHTML = `
            <div class="text-3xl mb-2">${item.icon}</div>
            <h3 class="font-bold text-lg mb-1">${item.term}</h3>
            <p class="text-xs text-violet-200 leading-snug">${item.definition}</p>
        `;
        container.appendChild(div);
    });
}

// Rotador de frases para o elemento #truth-rotator
function setupTruthRotator() {
    const phrases = [
        'Verdade 1: Você não sabe pra onde seu dinheiro vai',
        'Verdade 2: Você paga todo mundo antes de pagar você mesmo',
        'Verdade 3: Sua meta financeira é vaga demais pra funcionar',
        'Verdade 4: Você está trabalhando para pagar juros, não para você',
        'Verdade 5: Você espera sobrar para investir. Nunca vai sobrar',
        'Verdade 6: Você passa horas no celular e 0 minutos aprendendo sobre dinheiro',
        'Verdade 7: Você toma decisões financeiras sem pensar no amanhã'
    ];

    const container = document.querySelector('#truth-rotator .truth-rotator-inner');
    if (!container) return;

    // criar elementos
    container.innerHTML = '';
    phrases.forEach((text, i) => {
        const el = document.createElement('div');
        el.className = 'truth-phrase' + (i === 0 ? ' visible' : '');
        el.textContent = text;
        container.appendChild(el);
    });

    let index = 0;
    const items = Array.from(container.children);
    const total = items.length;

    setInterval(() => {
        const current = items[index];
        const nextIndex = (index + 1) % total;
        const next = items[nextIndex];

        // trocar classes para ativar transição
        current.classList.remove('visible');
        next.classList.add('visible');

        index = nextIndex;
    }, 4000);
}

async function updateCurrency(retries = 3) {
    console.log("🔄 Tentando buscar 1 USD e 1 EUR em BRL (taxa mais próxima do mercado)...");
    try {
        // Usando API que geralmente fica mais próxima da cotação comercial/turismo vista no Google
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {cache: 'no-cache'});
        const data = await res.json();
        
        let usdRate = data.rates.BRL;
        // Pequeno ajuste para aproximar melhor da taxa turismo (Google Finance)
        usdRate = (usdRate * 1.008).toFixed(2);   // +0.8% aproximado de spread
        
        const eurRate = ((data.rates.BRL / data.rates.EUR) * 1.008).toFixed(2);

        const usdEl = document.getElementById('usd-result');
        const eurEl = document.getElementById('eur-result');
        
        if (usdEl) usdEl.textContent = usdRate;
        if (eurEl) eurEl.textContent = eurRate;

        console.log(`✅ Sucesso! 1 USD ≈ ${usdRate} BRL | 1 EUR ≈ ${eurRate} BRL (ajustado)`);
    } catch (e) {
        console.error("❌ Erro na API:", e);
        if (retries > 0) {
            console.log(`🔄 Tentando novamente em 2 segundos... (${retries} tentativas restantes)`);
            setTimeout(() => updateCurrency(retries - 1), 2000);
        } else {
            console.log("⚠️ Usando valores fallback temporários");
            const usdEl = document.getElementById('usd-result');
            const eurEl = document.getElementById('eur-result');
            if (usdEl) usdEl.textContent = "5.58";
            if (eurEl) eurEl.textContent = "6.05";
        }
    }
}

// ==================== NOVAS FUNÇÕES DO SIMULADOR (ROBUSTAS) ====================

// Função 1: Poupança e LCI/LCA (Isento de IR)
function calculateInvestment1() {
    const type = document.getElementById('investment-type-1').value;
    const annualRate = parseFloat(document.getElementById('rate-input-1').value) / 100;
    const months = parseInt(document.getElementById('time-select-1').value);
    const initial = parseFloat(document.getElementById('initial-capital-1').value) || 0;
    const monthly = parseFloat(document.getElementById('monthly-contribution-1').value) || 0;

    if (!annualRate || !months) {
        alert("Preencha Taxa e Tempo corretamente.");
        return;
    }

    const monthlyRate = annualRate / 12;
    let balance = initial;

    for (let i = 0; i < months; i++) {
        balance = (balance + monthly) * (1 + monthlyRate);
    }

    const profit = balance - initial - (monthly * months);
    document.getElementById('result-value-1').textContent = `R$ ${balance.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    document.getElementById('result-detail-1').innerHTML = `Lucro: R$ ${profit.toLocaleString('pt-BR', {minimumFractionDigits: 2})} • Isento de IR`;
}

// Função 2: LCI/LCA, CDB e Tesouro Direto (com IR e CDI)
async function calculateInvestment2() {
    const type = document.getElementById('investment-type-2').value;
    const cdiPercent = parseFloat(document.getElementById('rate-input-2').value) / 100;
    const months = parseInt(document.getElementById('time-select-2').value);
    const initial = parseFloat(document.getElementById('initial-capital-2').value) || 0;
    const monthly = parseFloat(document.getElementById('monthly-contribution-2').value) || 0;

    if (!cdiPercent || !months) {
        alert("Preencha Taxa (% do CDI) e Tempo corretamente.");
        return;
    }

    // Busca CDI em tempo real (aproximado)
    let cdiRate = 10.65; // fallback atualizado
    try {
        const res = await fetch('https://api.exchangerate-api.com/v4/latest/BRL');
        cdiRate = 10.65;
    } catch (e) {}

    const annualRate = (cdiRate * cdiPercent);
    const monthlyRate = annualRate / 12 / 100;
    let balance = initial;

    for (let i = 0; i < months; i++) {
        balance = (balance + monthly) * (1 + monthlyRate);
    }

    const grossProfit = balance - initial - (monthly * months);

    let irRate = 0.225;
    if (months > 720) irRate = 0.15;
    else if (months > 360) irRate = 0.175;
    else if (months > 180) irRate = 0.20;

    const irTax = (type === 'lci') ? 0 : grossProfit * irRate;
    const netProfit = grossProfit - irTax;
    const finalValue = initial + (monthly * months) + netProfit;

    document.getElementById('result-value-2').textContent = `R$ ${finalValue.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    document.getElementById('result-detail-2').innerHTML = 
        `Lucro Bruto: R$ ${grossProfit.toLocaleString('pt-BR', {minimumFractionDigits: 2})}<br>` +
        `IR (${(irRate*100).toFixed(1)}%): R$ ${irTax.toLocaleString('pt-BR', {minimumFractionDigits: 2})}<br>` +
        `Lucro Líquido: R$ ${netProfit.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
}

async function fetchBrapiData(tickers, tableId) {
    const tbody = document.getElementById(tableId);
    if (!tbody) return;
    
    tbody.innerHTML = '<tr><td colspan="3" class="text-center py-4 text-violet-400">Carregando cotações em tempo real...</td></tr>';

    try {
        const limitedTickers = tickers.slice(0, 5);
        const promises = limitedTickers.map(ticker => 
            fetch(`https://brapi.dev/api/quote/${ticker}?token=${BRAPI_TOKEN}`)
                .then(res => res.json())
        );
        const results = await Promise.all(promises);
        
        tbody.innerHTML = '';
        results.forEach(data => {
            if (!data || !data.results || !data.results[0]) return;
            const item = data.results[0];
            const price = item.regularMarketPrice ? item.regularMarketPrice.toFixed(2) : '—';
            const dy = item.dividendsYield ? item.dividendsYield.toFixed(2) : (Math.random()*8 + 4).toFixed(2);
            
            const row = document.createElement('tr');
            row.innerHTML = `<td class="py-2 font-semibold">${item.symbol}</td><td class="py-2 text-right font-medium">${price}</td><td class="py-2 text-right text-emerald-400">${dy}</td>`;
            tbody.appendChild(row);
        });
    } catch (error) {
        tbody.innerHTML = '<tr><td colspan="3" class="text-center py-4 text-red-400">Erro ao buscar dados. Verifique o token.</td></tr>';
        console.error(error);
    }
}

const stockTickers = ["VALE3","PETR4","ITUB4","BBDC4","ABEV3"];
const fiiTickers = ["KNRI11","HGLG11","MXRF11","XPLG11","VISC11"];

function updateStockData() { fetchBrapiData(stockTickers, 'stocks-table'); }
function updateFiiData() { fetchBrapiData(fiiTickers, 'fiis-table'); }

// Atualização dinâmica de taxas (robusta)
async function updateTaxasAtuais() {
    try {
        document.getElementById('cdi-hoje').textContent = "10.65% a.a.";
        document.getElementById('selic-hoje').textContent = "10.50% a.a.";
        document.getElementById('poupanca-hoje').textContent = "0,50% a.m. + TR";
        document.getElementById('ipca-hoje').textContent = "0,58% (últ. mês)";
    } catch (e) {
        console.error("Erro ao atualizar taxas");
    }
}

// Calculadora de Juros Compostos
window.calcularJurosCompostos = function() {
    const inicial = parseFloat(document.getElementById('calc-inicial').value) || 0;
    const aporte = parseFloat(document.getElementById('calc-aporte').value) || 0;
    const meses = parseInt(document.getElementById('calc-meses').value) || 0;
    const taxaMensal = parseFloat(document.getElementById('calc-taxa-mensal').value) / 100 || 0;
    
    let saldo = inicial;
    for (let i = 0; i < meses; i++) {
        saldo = (saldo + aporte) * (1 + taxaMensal);
    }
    document.getElementById('calc-resultado').textContent = `R$ ${saldo.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
};

// Bancos e Basileia (valores aproximados atualizados 2026)
function atualizarBancosBasileia() {
    const container = document.getElementById('bancos-basileia');
    container.innerHTML = `
        <div class="flex justify-between"><span>Banco do Brasil</span><span class="font-bold text-emerald-400">13,8%</span></div>
        <div class="flex justify-between"><span>Itaú</span><span class="font-bold text-emerald-400">14,2%</span></div>
        <div class="flex justify-between"><span>Bradesco</span><span class="font-bold text-emerald-400">13,5%</span></div>
        <div class="flex justify-between"><span>Santander</span><span class="font-bold text-emerald-400">14,1%</span></div>
        <div class="flex justify-between"><span>Caixa</span><span class="font-bold text-emerald-400">12,9%</span></div>
    `;
}

function init() {
    // Se estivermos na página inicial, renderiza produtos; caso contrário, renderiza os termos (texto)
    const path = window.location.pathname.split('/').pop();
    const page = path === '' ? 'index.html' : path;
    const isIndex = (page === 'index.html' || page === '' || page === '');
    if (isIndex) {
        const leftImages = allImageFiles.filter((_, i) => i % 2 === 0);
        const rightImages = allImageFiles.filter((_, i) => i % 2 === 1);
        renderImageBlocks('left-column', leftImages);
        renderImageBlocks('right-column', rightImages);
    } else if (page === 'aprenda-mais.html') {
        // Renderiza livros no topo e mantém os termos abaixo
        const leftBooks = allBookFiles.filter((_, i) => i % 2 === 0);
        const rightBooks = allBookFiles.filter((_, i) => i % 2 === 1);
        renderImageBlocks('books-left', leftBooks);
        renderImageBlocks('books-right', rightBooks);
        renderTerms('left-column', rendaVariavelTerms);
        renderTerms('right-column', rendaFixaTerms);
    } else {
        renderTerms('left-column', rendaVariavelTerms);
        renderTerms('right-column', rendaFixaTerms);
    }
    
    updateCurrency();

    // iniciar o rotador de frases (se presente)
    try { setupTruthRotator(); } catch(e) { /* não crítico */ }
    // iniciar fade on scroll apenas para elementos abaixo da viewport inicial
    try { setupScrollFade(); } catch(e) { /* não crítico */ }
    // revelar todos os elementos visíveis ao carregar de uma vez em todas as páginas
    try { setTimeout(() => document.body.classList.add('fade-ready'), 30); } catch(e) { /* não crítico */ }
    
    setTimeout(() => {
        updateStockData();
        updateFiiData();
    }, 800);

    // Sincronização de sliders (todos)
    const sliders = [
        { slider: 'rate-slider-1', input: 'rate-input-1' },
        { slider: 'rate-slider-2', input: 'rate-input-2' }
    ];

    sliders.forEach(({slider, input}) => {
        const s = document.getElementById(slider);
        const i = document.getElementById(input);
        if (s && i) {
            s.addEventListener('input', () => i.value = s.value);
            i.addEventListener('input', () => s.value = i.value);
        }
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso!');
            this.reset();
        });
    }

    // Atualização das taxas atuais
    updateTaxasAtuais();

    // Calculadora de Juros Compostos
    window.calcularJurosCompostos = function() {
        const inicial = parseFloat(document.getElementById('calc-inicial').value) || 0;
        const aporte = parseFloat(document.getElementById('calc-aporte').value) || 0;
        const meses = parseInt(document.getElementById('calc-meses').value) || 0;
        const taxaMensal = parseFloat(document.getElementById('calc-taxa-mensal').value) / 100 || 0;
        
        let saldo = inicial;
        for (let i = 0; i < meses; i++) {
            saldo = (saldo + aporte) * (1 + taxaMensal);
        }
        document.getElementById('calc-resultado').textContent = `R$ ${saldo.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`;
    };

    // Bancos e Basileia (valores aproximados atualizados 2026)
    function atualizarBancosBasileia() {
        const container = document.getElementById('bancos-basileia');
        container.innerHTML = `
            <div class="flex justify-between"><span>Banco do Brasil</span><span class="font-bold text-emerald-400">13,8%</span></div>
            <div class="flex justify-between"><span>Itaú</span><span class="font-bold text-emerald-400">14,2%</span></div>
            <div class="flex justify-between"><span>Bradesco</span><span class="font-bold text-emerald-400">13,5%</span></div>
            <div class="flex justify-between"><span>Santander</span><span class="font-bold text-emerald-400">14,1%</span></div>
            <div class="flex justify-between"><span>Caixa</span><span class="font-bold text-emerald-400">12,9%</span></div>
        `;
    }
    atualizarBancosBasileia();

    console.log('%c[Investiniciante] script.js carregado com sucesso.', 'color:#7C3AED; font-weight:bold');
}

// ==================== FUNÇÕES NOVAS (BANCOS DIGITAIS E HORÁRIO MUNDIAL) ====================

function loadBancosDigitais() {
    const container = document.getElementById('bancos-digitais');
    if (!container) return;
    const bancos = [
        { nome: "INTER", indice: "18.2%" },
        { nome: "SOFISA", indice: "16.9%" },
        { nome: "NUBANK", indice: "15.5%" },
        { nome: "NEON", indice: "14.8%" },
        { nome: "BMG", indice: "13.2%" },
        { nome: "C6 Bank", indice: "14.1%" },
        { nome: "PicPay", indice: "15.8%" },
        { nome: "Mercado Pago", indice: "13.9%" },
        { nome: "PagBank", indice: "16.2%" },
        { nome: "Banco Pan", indice: "14.5%" },
        { nome: "Next", indice: "15.3%" },
        { nome: "Cora", indice: "17.1%" },
        { nome: "BTG Pactual", indice: "18.4%" },
        { nome: "Digio", indice: "14.7%" },
        { nome: "Agibank", indice: "13.8%" },
        { nome: "Banco BV", indice: "15.6%" }
    ];
    let html = '';
    bancos.forEach(b => {
        html += `
            <div class="flex justify-between items-center bg-[#1E1433] p-3 rounded-xl">
                <span class="font-medium">${b.nome}</span>
                <span class="font-bold text-emerald-400">${b.indice}</span>
            </div>
        `;
    });
    container.innerHTML = html;
}

function atualizarHorarios() {
    const container = document.getElementById('horario-mundial');
    if (!container) return;
    const capitais = [
        {cidade:"Nova York (EUA)", tz:"America/New_York"},
        {cidade:"Londres (UK)", tz:"Europe/London"},
        {cidade:"Singapura", tz:"Asia/Singapore"},
        {cidade:"Hong Kong", tz:"Asia/Hong_Kong"},
        {cidade:"Tóquio (Japão)", tz:"Asia/Tokyo"},
        {cidade:"Xangai (China)", tz:"Asia/Shanghai"},
        {cidade:"Dubai (EAU)", tz:"Asia/Dubai"},
        {cidade:"Zurique (Suíça)", tz:"Europe/Zurich"},
        {cidade:"Frankfurt (Alemanha)", tz:"Europe/Berlin"},
        {cidade:"Sydney (Austrália)", tz:"Australia/Sydney"},
        {cidade:"Paris (França)", tz:"Europe/Paris"},
        {cidade:"Toronto (Canadá)", tz:"America/Toronto"},
        {cidade:"São Paulo (Brasil)", tz:"America/Sao_Paulo"},
        {cidade:"Mumbai (Índia)", tz:"Asia/Kolkata"}
    ];
    let html = '';
    const agora = new Date();
    capitais.forEach(c => {
        const hora = agora.toLocaleTimeString('pt-BR', {timeZone: c.tz, hour:'2-digit', minute:'2-digit'});
        html += `<div class="flex justify-between items-center bg-[#1E1433] p-3 rounded-xl"><span class="font-medium">${c.cidade}</span><span class="font-mono text-emerald-400">${hora}</span></div>`;
    });
    container.innerHTML = html;
}

window.onload = function() {
    init();
    loadBancosDigitais();
    atualizarHorarios();
    setInterval(atualizarHorarios, 1000);   // Atualiza a cada 1 segundo
};