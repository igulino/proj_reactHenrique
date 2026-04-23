Aplicação de Exemplo — Login Google e Cadastro

**Descrição**

Aplicação web em React que demonstra autenticação com conta Google, apresentação dos desenvolvedores e um formulário de cadastro de usuário com campos pré-preenchidos a partir dos dados do login. Ao finalizar o cadastro, a aplicação gera e exibe o objeto JSON com os dados do usuário.

**Tecnologias utilizadas**

- React (componentes funcionais)
- TypeScript
- Vite (dev server/build)
- React Router (navegação)
- Google Identity Services (login com Google)

**Integrantes da dupla**

- Igor — back-end e front
- Rafael — Back-end e front 

**Instruções para execução local**

1. Clonar o repositório e entrar na pasta do projeto:

```bash
git clone <repo-url>
cd henriqueProj
```

2. Criar um arquivo `.env` na raiz com a variável de ambiente do Google (obtenha a Client ID no Google Cloud Console):

```env
VITE_GOOGLE_CLIENT_ID=seu_client_id.apps.googleusercontent.com
```

3. Certifique-se de registrar a origem do dev server (ex.: `http://localhost:5174`) nas configurações do OAuth 2.0 Client (Google Cloud Console) em _Authorized JavaScript origins_.

4. Instalar dependências e iniciar o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

5. Abrir no navegador: `http://localhost:5174/` (ou a porta mostrada pelo Vite).

**Observações**
- Os campos de nome e e-mail do formulário de cadastro são pré-preenchidos com os dados obtidos no login Google.

**Link da aplicação em produção**

https://proj-react-henrique-8fm9-alpha.vercel.app
