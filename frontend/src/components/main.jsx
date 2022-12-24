import React,{Component} from "react";
import CategoryCard from './CategoryCard'
import sportImg from './images/sports.png'
import scienceImg from './images/science.png'
import langImg from './images/language.png'

class Main extends Component{
    render(){
        return(
            <div className="main justify-start items-center  px-6 space-y-20" >
                <div className="title px-6 flex justify-between ">
                        <h4>QuizR</h4>
                    <button>Create Quiz +</button>
                </div>
                <section className="content px-8 mx-auto items-center ">
                    <h4>Categories</h4>
                    <div className="flex space-x-4 mx-auto items-center justify-between" >
                        <div className="ccard">
                        <CategoryCard catId='1' catName='sports' cardImage={sportImg} catDef='questions based on sports, games, atheletes and events.'/>  
                        </div>
                        <div className="ccard">
                        <CategoryCard catId='2' catName='science' cardImage={scienceImg} catDef='questions based on physics, chemistry, biology and discoveries'/>
                        </div>
                        <div className="ccard">
                        <CategoryCard catId='3' catName='languages' cardImage={langImg} catDef='questions based on literature,grammer,poetry from different languages'/>
                        </div>
                    </div>
                    
                </section>
                <div className="footer px-8">
                    <h3>About</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fugiat sint nemo est, molestias similique omnis, quas ducimus neque porro commodi perspiciatis asperiores. Laboriosam saepe assumenda explicabo dolor tempore et!</p>
                </div>
            </div>
        )
    }
}

export default Main;

