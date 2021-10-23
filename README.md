# NextStop

# Index
<ol>
    <li><a href="#Summary">Summary</a></li>
    <li><a href="#Prerequisites">Prerequisites</a></li>
    <li><a href="#Usage">Usage</a></li>
    <li><a href="#Module-Description">Module Description</a></li>
    <li><a href="#Authors">Author</a></li>
</ol>

# Summary

NextStop is an All-in-One travel and events web application, which allows travelers to find and book flights, hotels and events all in one place. What distinguishes NextStop from other competitors is its user friendly appeal to travelers of ages between 18-30 to bring the ease and stress free feel of an exciting trip. 

# Prerequisites
```sh
Node v14.17.5
npm 6.14.14
MySQL 8.0.26
```
# Usage 
1. Run `npm install` for all dependencies
 
3. Access MySQL
```sh
mysql -u root -p
```

3. Create a config.js file in the root directory with the following layout 
```sh
module.exports = {
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'NSDB'
}
```

4. run schema.sql in mysql

6. Build with webpack:
```sh
npm run build
```

7. Start server: 

```sh
npm start
```

## Modle Description
#### Login/Signup
#### landing Page
#### Event Search Page
#### Hotel Search Page
#### Flights checkout process
#### User Dashboard

## Authors
- Nicholas Wai
- Jacques Dubois
- Robin Jeng
- Crystal Lee
- Kevin Yang
- Yue Zhang
