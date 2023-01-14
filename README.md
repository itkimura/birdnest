# birdnest application
My solution build with **Java** to **Reaktor <a href="https://assignments.reaktor.com/birdnest/">pre-assignment</a>** for Developer trainee, summer 2023. This is a web application which lists all the pilots who recently violated the NDZ perimeter.

Project hosted: **<a href="https://itkimura-birdnest.herokuapp.com/">https://itkimura-birdnest.herokuapp.com/</a>**

<img width="1000" alt="Screenshot 2023-01-13 at 18 18 19" src="https://user-images.githubusercontent.com/61685238/212367985-295e83cb-a078-422d-b3bf-41aa48b20bdb.png">


**Back-end: Java (Spring Boot)**

Poll drones api every two second and parse received data. If drones are in NDZ(no drone zone), poll pilot information and add to the violator list.

**Front-end: Hilla (React, TypeScript)**
Hilla is an open source framework that integrates a Spring Boot Java back end with a React based front end. 
![birdnest - workflow](https://user-images.githubusercontent.com/61685238/212367878-e78627b9-1309-4238-b868-0b1a50a9a9b8.jpg)

You can build the application with
```
mvn package -Pproduction
```

### Highlight

- Application.log in root
- Created function tests for monitor service
- CI/CD workflow to Heroku in GitHub Actions
