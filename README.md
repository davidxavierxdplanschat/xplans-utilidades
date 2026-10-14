# XPlans Utilidades

Projeto de portfólio de David Xavier. React + Next.js App Router + TypeScript.

## Rodar localmente

Requer Node.js 22 ou superior.

1. Na pasta do projeto, execute npm install (ou npm ci quando o lockfile estiver presente).
2. Copie .env.example para .env.local.
3. Execute npm run dev e abra http://localhost:3000.
4. Para verificar: npm run typecheck e npm run build.

## Deploy na Vercel

1. Envie esta pasta para um repositório GitHub.
2. Importe o repositório na Vercel e selecione Next.js.
3. Se o repositório incluir pastas externas, defina a Root Directory como outputs/xplans.
4. Configure NEXT_PUBLIC_SITE_URL com a URL HTTPS final, sem barra ao final. Isso define canonical, sitemap e robots.
5. Opcionalmente adicione AWESOME_API_KEY, obtida em https://awesomeapi.com.br. A chave só é usada no servidor e nunca deve ter prefixo NEXT_PUBLIC.
6. Publique. Se a URL final só for conhecida depois do primeiro deploy, atualize a variável e publique novamente.

Não há banco de dados ou credenciais obrigatórias. O site precisa de hospedagem Next.js com execução de servidor; exportação HTML estática não atende às rotas /api.

## Funcionalidades

- Busca de CEP com validação, estado de carregamento, erros, cópia de endereço e mapa externo.
- Conversão USD/EUR/GBP ↔ BRL usando bid (compra), com horário da cotação.
- Requisições no servidor, timeout de 8 segundos, cache de CEP por 24h e câmbio por 60s.
- Páginas próprias, metadados, canonical, Open Graph, sitemap e robots.
- Layout responsivo, formulários rotulados, foco visível e avisos acessíveis.

## Fontes

https://docs.awesomeapi.com.br/api-cep
https://docs.awesomeapi.com.br/api-de-moedas
https://docs.awesomeapi.com.br/instrucoes-api-key

Os limites e a disponibilidade são definidos pelo provedor. Respostas indisponíveis não são substituídas por dados fictícios. O cache de 60 segundos não garante que a negociação seja recente. O valor convertido não inclui tarifas, tributos ou spread.

## Ideias para próximas versões

1. Busca de endereço por texto: a documentação também lista um endpoint de busca de endereços. Validar acesso e limites antes de implementar.
2. Preenchimento de endereço para pequenos negócios: reutilizar CEP, cidade, estado, DDD e IBGE em formulários.
3. Planejador de viagem: orçamento por categoria em reais e moeda de destino, com tarifas configuráveis.
4. Histórico de câmbio: usar o endpoint daily para comparar períodos com indicação da fonte e datas.
5. Consulta de DDD/IBGE a partir do CEP para apoiar cadastros e pesquisas locais.

Não publicar páginas de CEP em massa sem conteúdo útil e dados validados. SEO técnico não garante posicionamento.

## Produção

Manter dependências atualizadas, observar cotas da AwesomeAPI e configurar proteção contra abuso no provedor caso o tráfego cresça. O projeto não possui um limitador distribuído de requisições.
