import React, { useState, useRef }  from 'react';
import './Mood.css';

function Mood() {
  return (
    <form>
        <div className="feedback">
            <label className="angry">
                <input type="radio" value="1" name="feedback" onClick={e =>
                    {setTimeout(function(){
                        prompt(`Thanks for your feedback! Tell us more, so that we can improve.`)
                    }, 1000)}}/>
                <div>
                    <svg className="eye left">
                        <use xlinkHref="#eye" />
                    </svg>
                    <svg className="eye right">
                        <use xlinkHref="#eye" />
                    </svg>
                    <svg className="mouth">
                        <use xlinkHref="#mouth" />
                    </svg>
                </div>
            </label>
            <label className="sad">
                <input type="radio" value="2" name="feedback" onClick={e =>
                    {setTimeout(function(){
                        prompt(`Thanks for your feedback! Tell us more, so that we can improve.`)
                    }, 1000)}}/>
                <div>
                    <svg className="eye left">
                        <use xlinkHref="#eye" />
                    </svg>
                    <svg className="eye right">
                        <use xlinkHref="#eye" />
                    </svg>
                    <svg className="mouth">
                        <use xlinkHref="#mouth" />
                    </svg>
                </div>
            </label>
            <label className="ok">
                <input type="radio" value="3" name="feedback" onClick={e =>
                    {setTimeout(function(){
                        prompt(`Thanks for your feedback! Tell us more, so that we can improve.`)
                    }, 1000)}}/>
                <div></div>
            </label>
            <label className="good">
                <input type="radio" value="4" name="feedback" defaultChecked onClick={e =>
                    {setTimeout(function(){
                        prompt(`Thanks for your feedback! Let's share TATA to your friends`, `http://www.jointata.com/`)
                    }, 1000)}}/>
                <div>
                    <svg className="eye left">
                        <use xlinkHref="#eye" />
                    </svg>
                    <svg className="eye right">
                        <use xlinkHref="#eye" />
                    </svg>
                    <svg className="mouth">
                        <use xlinkHref="#mouth" />
                    </svg>
                </div>
            </label>
            <label className="happy">
                <input type="radio" value="5" name="feedback" onClick={e =>
                    {setTimeout(function(){
                        prompt(`Thanks for your feedback! Let's share TATA to your friends`, `http://www.jointata.com/`)
                    }, 1000)}}/>
                <div>
                    <svg className="eye left">
                        <use xlinkHref="#eye" />
                    </svg>
                    <svg className="eye right">
                        <use xlinkHref="#eye" />
                    </svg>
                </div>
            </label>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 4" id="eye">
                <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 7" id="mouth">
                <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"></path>
            </symbol>
        </svg>
    </form>
  )
}

export default Mood;