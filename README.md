# Oficina-02 FSN5-Backend

## 📚 Tecnologias Utilizadas

- **Node.js**
- **Prisma ORM**
- **PostgreSQL**
- **Prisma ERD Generator** (Para gerar o Diagrama ER)

---

## ✅ Comandos Utilizados

### 1️⃣ **Inicializar o Prisma**
```bash
npx prisma init
```

### 2️⃣ **Criar o banco de dados**
```bash
npx prisma migrate dev --name init
```

### 3️⃣ **Abrir o Prisma Studio (Visualizar o banco)**
```bash
npx prisma studio
```

### 4️⃣ **Resetar o banco de dados (caso necessário)**
```bash
npx prisma migrate reset
```

---

## 🛠️ Gerar o Diagrama ER com o Prisma

### 1️⃣ Instalar o Prisma ERD Generator
```bash
npm install prisma-erd-generator
```

### 2️⃣ Adicionar no arquivo `schema.prisma`:
```prisma
generator erd {
  provider = "prisma-erd-generator"
}
```

### 3️⃣ Gerar o Diagrama ER
```bash
npx prisma generate
```

O diagrama será gerado em formato `.svg` na pasta `prisma/ERD.svg`.

---

## 🛑 Resolvendo Erros Comuns

### Erro `P3006` - Shadow Database
```bash
rm -rf prisma/migrations
npx prisma migrate reset
```

---

## 🧐 Visualizar o Diagrama ER no pgAdmin

1️⃣ No pgAdmin, vá até `Schemas > public`
2️⃣ Clique com o botão direito em `public`
3️⃣ Selecione `Generate ERD Diagram`

---

## 🌐 Acesse o Prisma Studio
```bash
npx prisma studio
```

---

## 🎯 Resultado esperado
- Banco de dados PostgreSQL sincronizado
- Diagrama ER gerado com sucesso
- Prisma Studio rodando perfeitamente ✅

