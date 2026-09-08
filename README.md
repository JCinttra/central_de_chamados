# Central de Chamados PCP — versão Firebase

Esta versão não utiliza GitHub Issues. Colaboradores abrem e acompanham chamados no próprio site; o administrador atende tudo em `admin.html`.

## Arquivos
- `index.html`: abrir chamado
- `acompanhar.html`: consultar chamado por protocolo + nome
- `admin.html`: login e painel do administrador
- `firebase-config.js`: configure com o bloco Firebase Web do seu projeto
- `firestore-rules.txt`: regras de segurança para publicar no Firestore

## Configuração rápida
1. Crie o projeto no Firebase e registre um app Web.
2. Ative Firestore Database e Authentication > E-mail/Senha.
3. Crie seu usuário administrador em Authentication > Users.
4. Copie o bloco de configuração Web para `firebase-config.js`.
5. Publique o conteúdo de `firestore-rules.txt` em Firestore Database > Rules.
6. Substitua os arquivos no repositório `JCinttra/central_de_chamados`.
7. Acesse `https://jcinttra.github.io/central_de_chamados/`.

## Atenção
A chave de configuração Web do Firebase é pública por natureza. A segurança dos chamados depende das regras do Firestore, que já estão incluídas.
