# birdnest application
My solution build with **Java** to **Reaktor <a href="https://assignments.reaktor.com/birdnest/">pre-assignment</a>** for Developer trainee, summer 2023.

Project hosted:

<img width="1000" alt="Screenshot 2023-01-13 at 18 18 19" src="https://user-images.githubusercontent.com/61685238/212367985-295e83cb-a078-422d-b3bf-41aa48b20bdb.png">


**Back-end: Java (Spring Boot)**

Poll drones api every two seccond and parse received data. If the drone is in NDZ(no drone zone), poll pilot information and add the violator lists.

**Front-end: Hilla (React, TypeScript)**
Hilla is an open source framework that integrates a Spring Boot Java back end with a reactive TypeScript front end. It helps my application faster with type-safe server communication, included UI components.
![birdnest - workflow](https://user-images.githubusercontent.com/61685238/212367878-e78627b9-1309-4238-b868-0b1a50a9a9b8.jpg)

You can build the application with
```
mvn package -Pproduction
```

### Highlight

- Application.log in root
- Created function tests for monitor service
- CI workflow in GitHub Actions
- GitHub Integration (Heroku Github Deploy)
