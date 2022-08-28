# **เกี่ยวกับ Project**

สร้างขึ้นเพื่อแก้ไขโจทย์ปัญหานับสระภายในข้อความ

-----
Please write a small program to count the number of vowels in a given word.

The submit code will be evaluated with these key reviewing criteria: 
- Result – How accurate of the result of the program 
- Algorithm – The program shouldn’t be too complicated 
- Maintainability -- i.e. Code structure, OOP concept, Single Responsibility, Design pattern, unit test, etc. 
- Readability -- i.e. comments, naming convention, consistency of the indent, coding style, etc.
 
Feel free to use Internet, but you have to be able to answer the question “why you did this?” in every single line of your code.
------

# **Run project**

Run command
```
npm i 
```

Run command
```
npm run start
```

Run test
```
npm run test
```

**Server starting on port 3000**

Example
```
http://localhost:3000
```

# **Routes**

Method | URI | Description
| ----- | ----- | ----- |
*Route web*
GET/HEAD | / | แสดงผลหน้าเว็บหลัก index.js
*Route API* 
POST | /api/count-vowels | นับจำนวนสระภายในข้อความ
