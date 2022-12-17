const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];

class User {
    constructor(obj){
        Object.assign(this,obj)
    }

    render(){
        let name = this.name,
            age = this.age,
            role = this.role,
            courses = this.courses
            ;
        
        return `<div class="user">
                    <div class="user__info">
                        <div class="user__info--data">
                            <img src="images/users/${name.replaceAll(` `,``)}.png" alt="${name}" height="50">
                            <div class="user__naming">
                                <p>Name: <b>${name}</b></p>
                                <p>Age: <b>${age}</b></p>
                            </div>
                        </div>
                        <div class="user__info--role student">
                            <img src="images/roles/${role}.png" alt="${role}" height="25">
                            <p>${role}</p>
                        </div>
                    </div>
                    ${courses ? this.renderCourses() : ""}
                </div>`
    }

    getMarkGradation(course){ 
        let markGradation;
        let mark = course.mark || course.score ;

            for (let key in gradation){
                if (mark < key || mark == key){
                    return markGradation = gradation[key];
                }
            }
    }

    renderCourses(){
        let role = this.role,
            pS = [];

        pS = this.courses.map(course => {
            let markGradation = this.getMarkGradation(course);
    
            return `<p class="user__courses--course ${role}">${course.title}<span class="${markGradation}">${markGradation}</span></p>`
        })

        return `<div class="user__courses">${pS.join(``)}</div>`
    }


}

class Student extends User {
    constructor(obj){
        super(obj);
    }
}

class Admin extends User {
    constructor(obj){
        super(obj);
    }

    renderCourses(){    
        let role = this.role,
        divS = [];

        divS = this.courses.map(course => {
            let markGradation = this.getMarkGradation(course);
            let lector = course.lector;

            return `<div class="user__courses--course ${role}">
            <p>Title: <b>${course.title}</b></p>
            <p>Admin's score: <span class="${markGradation}">${markGradation}</span></p>
            <p>Lector: <b>${lector}</b></p>
        </div>`

        })
            
        return `<div class="user__courses admin--info">${divS.join(``)}</div>`
    }
}

class Lector extends User {
    constructor(obj){
        super(obj);
    }

    getStudentsScore(course){ 
        let studentsScore = course.studentsScore;
        let score;

            for (let key in gradation){
                if (studentsScore < key || studentsScore == key){
                    return score = gradation[key];
                }
            }
    }

    renderCourses(){    
        let role = this.role;
        let divS = [];

        divS = this.courses.map(course => {
            let markGradation = this.getMarkGradation(course);
            let studentsScore = this.getStudentsScore(course);

            return `<div class="user__courses--course ${role}">
            <p>Title: <b>${course.title}</b></p>
            <p>Lector's score: <span class="${markGradation}">${markGradation}</span></p>
            <p>Average student's score: <span class="${studentsScore}">${studentsScore}</span></p>
        </div>`
        })
                    
        return `<div class="user__courses admin--info">${divS.join(``)}</div>`
    }
}

const USER_ROLES = {
    student: user => new Student(user),
    admin: user => new Admin(user),
    lector: user => new Lector(user),
}

let usersClassified = users
    .map(user => {
        let userRole = user.role; 
        return USER_ROLES[userRole] ? USER_ROLES[userRole](user) : new User(user)
    })

document.write( `<div class="users">
            ${ usersClassified.map( item => item.render() ).join(``) }
            </div>`);
