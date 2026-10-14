# Validação

- Compilação de produção Next.js 15.5.28: aprovada.
- TypeScript: aprovado na compilação.
- Navegação, páginas de ferramentas, sitemap e robots: HTTP 200.
- Formulários: CEP inválido, endereço encontrado, conversão e inversão verificados em navegador com respostas simuladas para valores determinísticos.
- Rotas do servidor: CEP inválido e moeda não suportada retornam HTTP 400.
- Layout: capturas em 1440px e 390px, sem rolagem horizontal no celular.
- Consultas reais: CEP 01001000 retornou Praça da Sé, São Paulo; cotação USD-BRL retornou dados da AwesomeAPI.
- Nenhum erro JavaScript capturado na navegação testada.

O projeto não foi publicado. Antes do deploy, configurar NEXT_PUBLIC_SITE_URL para o domínio final conforme README.md. Disponibilidade e cotas da API dependem do provedor.
