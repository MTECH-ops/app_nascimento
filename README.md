# Meu App Expo - React Native com SQLite

Este é um aplicativo React Native desenvolvido com Expo, incluindo integração com banco de dados SQLite e armazenamento local.

## 🚀 Funcionalidades

- ✅ Interface moderna com React Native
- ✅ Banco de dados SQLite local
- ✅ Gerenciamento de usuários
- ✅ Sistema de tarefas (To-Do)
- ✅ Armazenamento local com AsyncStorage
- ✅ Ícones com Expo Vector Icons
- ✅ Interface responsiva e intuitiva

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn
- Expo CLI (instalado globalmente)
- Dispositivo móvel com Expo Go app ou emulador Android/iOS

## 🛠️ Instalação

1. **Clone o repositório** (se aplicável):
```bash
git clone [url-do-repositorio]
cd MyExpoApp
```

2. **Instale as dependências**:
```bash
npm install
```

3. **Inicie o projeto**:
```bash
npm start
# ou
expo start
```

## 📱 Como usar

1. **Executar no dispositivo físico**:
   - Instale o app "Expo Go" no seu celular
   - Escaneie o QR code que aparece no terminal/browser
   
2. **Executar no emulador**:
   - Android: `npm run android`
   - iOS: `npm run ios` (apenas no macOS)
   - Web: `npm run web`

## 🏗️ Estrutura do Projeto

```
MyExpoApp/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   ├── screens/            # Telas do aplicativo
│   │   └── HomeScreen.js   # Tela principal
│   └── services/           # Serviços e utilitários
│       ├── database.js     # Serviço SQLite
│       └── storage.js      # Serviço AsyncStorage
├── assets/                 # Imagens e recursos
├── App.js                  # Componente principal
├── package.json           # Dependências do projeto
└── README.md              # Este arquivo
```

## 🔧 Tecnologias Utilizadas

- **React Native** - Framework principal
- **Expo** - Plataforma de desenvolvimento
- **SQLite** - Banco de dados local
- **AsyncStorage** - Armazenamento local
- **Expo Vector Icons** - Biblioteca de ícones

## 📊 Funcionalidades do App

### Gerenciamento de Usuários
- Cadastro de novos usuários
- Listagem de usuários
- Validação de campos obrigatórios

### Sistema de Tarefas
- Criação de tarefas
- Marcação de tarefas como concluídas
- Exclusão de tarefas
- Listagem organizada

### Persistência de Dados
- Dados salvos localmente no SQLite
- Configurações mantidas no AsyncStorage
- Sincronização automática

## 🎯 Próximos Passos

Para expandir este projeto, você pode adicionar:

- [ ] Autenticação de usuários
- [ ] Sincronização com servidor remoto
- [ ] Notificações push
- [ ] Temas dark/light
- [ ] Categorização de tarefas
- [ ] Pesquisa e filtros
- [ ] Exportação de dados
- [ ] Configurações avançadas

## 🐛 Troubleshooting

### Problemas Comuns

1. **Erro ao iniciar**: Verifique se todas as dependências foram instaladas
2. **SQLite não funciona**: Certifique-se que o expo-sqlite está instalado
3. **Ícones não aparecem**: Verifique a instalação do @expo/vector-icons

### Comandos Úteis

```bash
# Limpar cache
expo start -c

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install

# Verificar status do Expo
expo doctor
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Desenvolvido com

- React Native + Expo
- SQLite para persistência
- JavaScript/ES6+
- Componentização moderna

---

**Nota**: Este é um projeto de demonstração com funcionalidades básicas. Sinta-se livre para expandir e customizar conforme suas necessidades!
