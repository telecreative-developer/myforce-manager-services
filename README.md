# MyForce Manager Services

## 1. Pustaka dan kerangka kerja yang digunakan
### 1. NodeJS
NodeJS adalah sebuah bahasa pemrograman JavaScript yang digunakan untuk bekerja dibagian server.

### 2. NPM
NPM adalah paket manajer yang digunakan untuk menginstal paket yang dibutukan untuk aplikasi JavaScript.

### 3. FeathersJS
FeathersJS adalah sebuah kerangka kerja yang digunakan untuk membangun aplikasi modern dengan menggunakan JavaScript.

### 4. Socket.io
Socket.io adalah sebuah pustaka yang digunakan untuk mengembangkan sistem yang real-time.

## 2. Konfigurasi basis data mysql pada FeathersJS
1. Buka folder ```myforce-manager-service```
2. Buka folder ```config```
3. Buka file ```default.json```
4. Perbaharui bagian  ```"mysql": "mysql://username:@host:port/database"```

## 2. Instalasi
## Tahap pengambangan (Development mode)
Untuk tahapan pengembangan atau development mode caranya sebagai berikut:

### 1. Salin dari GitHub
```git clone https://github.com/telecreative-developer/myforce-manager-services.git```

### 2. Menginstal semua paket yang dibutukan aplikasi
```cd myforce-manager-services && npm install```

### 3. Menjalankan aplikasi
```cd myforce-manager-services && npm start```

## Tahap produksi (Production mode)
```git clone https://github.com/telecreative-developer/myforce-manager-services.git```

### 2. Menginstal semua paket yang dibutukan aplikasi
```cd myforce-manager-services && npm install```

### 3. Menginstal pm2 secara global
```npm install -g pm2```

### 4. Menjalankan aplikasi
```cd myforce-manager-services && pm2 start src/```

# Endpoints

### Answers

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/answers

### Branches

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/branches

### customers

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/customers

### managers

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/managers

### pics

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/pics

### pipeline-products

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/pipeline-products

### pipelines

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/pipelines

### points

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/points

### products

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/products

### questions

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/questions

### subproducts

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/subproducts

### targets

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/targets

### team-updates

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/team-updates

### upload-avatar-manager

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/upload-avatar-manager

### upload-cover-manager

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/upload-cover-manager

### users

#### Resource Types (POST, GET, UPDATE, DELETE)

http://localhost/users
