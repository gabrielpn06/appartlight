
## Appartlight

Appartlight é um aplicativo de controle de estoque simples desenvolvido em **React Native** com **Expo**. Ele permite a adição, remoção e visualização de produtos armazenados localmente usando o **AsyncStorage**.

### Funcionalidades

- Adicionar novos produtos ao estoque.
- Visualizar a lista de produtos.
- Ver detalhes de cada produto individualmente.
- Remover produtos do estoque.
- Armazenamento local de dados utilizando **AsyncStorage**.

### Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [AsyncStorage](https://github.com/react-native-async-storage/async-storage)
- [React Navigation](https://reactnavigation.org/)

---

### Pré-requisitos

Antes de começar, você precisará ter o [Node.js](https://nodejs.org/en/) instalado em sua máquina. Você também precisará do **Expo CLI** e de um emulador Android/iOS ou do aplicativo **Expo Go** em um dispositivo físico.

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/appartlight.git
```

2. Navegue até o diretório do projeto:

```bash
cd appartlight
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o projeto:

```bash
expo start
```

Você verá um **QR Code** no terminal ou na janela do navegador. Escaneie o QR Code com o aplicativo **Expo Go** (disponível no iOS e Android) para visualizar o app no seu dispositivo.

---

### Rodando no Emulador

Para rodar o projeto no emulador:

- **Android**: Certifique-se de ter o **Android Studio** instalado e um emulador configurado. Rode o seguinte comando:
  ```bash
  expo run:android
  ```

- **iOS**: Para usuários de macOS com o **Xcode** instalado, você pode rodar o seguinte comando:
  ```bash
  expo run:ios
  ```

---

### Estrutura do Projeto

- **App.js**: Configuração principal de navegação e entrada do aplicativo.
- **screens/HomeScreen.js**: Tela principal onde os produtos são listados.
- **screens/AddProductScreen.js**: Tela para adicionar novos produtos ao estoque.
- **screens/ProductDetailScreen.js**: Tela para visualizar detalhes e remover um produto.

---
