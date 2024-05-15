import sqlite3

# Підключення до бази даних (створення бази, якщо не існує)
conn = sqlite3.connect('HPControl.db')
cursor = conn.cursor()

# Створення таблиць
cursor.execute('''
CREATE TABLE IF NOT EXISTS Health (
    id_Health INTEGER PRIMARY KEY,
    Title TEXT NOT NULL,
    Description TEXT,
    Date_of_creation DATE
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Training (
    id_Training INTEGER PRIMARY KEY,
    Title TEXT NOT NULL,
    Description TEXT,
    Date_of_creation DATE
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Sleep (
    id_Sleep INTEGER PRIMARY KEY,
    Title TEXT NOT NULL,
    Description TEXT,
    Date_of_creation DATE
)
''')

cursor.execute('''
CREATE TABLE IF NOT EXISTS Nutrition (
    id_Nutrition INTEGER PRIMARY KEY,
    Title TEXT NOT NULL,
    Description TEXT,
    Date_of_creation DATE
)
''')
cursor.execute('''
CREATE TABLE IF NOT EXISTS User (
    id_user INTEGER PRIMARY KEY,
    Name TEXT NOT NULL,
    Surname TEXT NOT NULL,
    Year_of_Birth DATE,
    Height INTEGER,
    Weight INTEGER,
    Blood_Type TEXT,
    id_Health INTEGER,
    id_Sleep INTEGER,
    id_Nutrition INTEGER,
    FOREIGN KEY (id_Health) REFERENCES Health (id_Health),
    FOREIGN KEY (id_Sleep) REFERENCES Sleep (id_Sleep),
    FOREIGN KEY (id_Nutrition) REFERENCES Nutrition (id_Nutrition)
)
''')
# Фіксація змін і закриття з'єднання
conn.commit()
conn.close()
