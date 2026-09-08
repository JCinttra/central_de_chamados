# Central de Chamados de TI - PCP

Site simples para abertura de chamados de suporte de TI para a área de PCP,
usando GitHub Pages (frontend) + GitHub Issues (backend de chamados).

Repositorio: JCinttra/central_de_chamados

## Estrutura de arquivos

- login.html   -> tela de login (porta de entrada do site)
- index.html   -> tela de abertura de chamados (colaboradores)
- admin.html   -> painel administrativo (somente ADM)
- .github/ISSUE_TEMPLATE/chamado.yml -> formulario usado no GitHub Issues

## Passo a passo para publicar

1. Crie um repositorio publico no GitHub chamado "central_de_chamados" (usuario JCinttra).
2. Envie estes arquivos mantendo a mesma estrutura de pastas.
3. Vá em Settings > Pages > em "Branch" selecione main e pasta / (root), clique em Save.
4. Aguarde 1 a 2 minutos. O link do site aparecera na mesma tela (Settings > Pages).
   Ex: https://jcinttra.github.io/central_de_chamados/
5. IMPORTANTE: como pagina inicial, compartilhe o link terminado em /login.html
   Ex: https://jcinttra.github.io/central_de_chamados/login.html
6. Verifique em Settings > General > Features que "Issues" esta habilitado (fica habilitado por padrao).
7. Teste o login:
   - Como colaborador: digite qualquer nome, sem senha, clique em Entrar -> abre tela de chamados.
   - Como ADM (voce): usuario "ADM", senha "pcp2026" -> abre o painel administrativo.
8. Compartilhe o link de login com a equipe de PCP.

## Sobre a senha do ADM

A senha padrao definida no codigo e: pcp2026
Para trocar, edite o arquivo login.html e altere a linha:
  const ADMIN_PASS_HASH = "pcp2026";
Troque o texto entre aspas pela senha que preferir, salve e envie novamente ao GitHub.

ATENCAO: este e um login simples do lado do cliente (nao ha servidor nem banco
de dados). A senha fica visivel no codigo-fonte da pagina, ou seja, nao e um
mecanismo de seguranca robusto - serve apenas para organizar o acesso interno.
Nao use para proteger informacoes sigilosas.

## Como voce recebe e responde aos chamados

- Toda vez que alguem abrir um chamado, sera criada uma "Issue" no repositorio.
- Voce recebe notificacao por e-mail (o mesmo cadastrado no GitHub).
- Para responder, va em Issues no repositorio (ou use o botao no Painel ADM),
  comente na conversa e, quando resolver, clique em "Close issue".
