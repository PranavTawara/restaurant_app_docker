# start
docker-compose up -d

# stop
docker-compose down

---------------
## 🚀 How to Run This Project on Another PC

1️⃣ **Copy the Project**  
- Copy the entire `restaurant-app` folder (including `frontend/public/assets/`) to the new PC.

2️⃣ **Install Dependencies**

**Backend**
```bash
1) Backend 

cd restaurant-app/backend
npm install


2) Frontend

cd ../frontend
npm install

3) docker 
docker-compose up -d --build




Runs on http://localhost:3000
