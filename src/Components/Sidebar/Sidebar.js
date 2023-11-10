import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Arrow from '../../Icons/tri.png'
import './Sidebar.css'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import HamMenu from '../../Icons/menu.png'
import Next from '../../Icons/next.png'


const Sidebar = ({List = [{title: String, link: String, path: String}], Title = "", Page = 0}) => {
    const navigate = useNavigate()
    const [selected, setSelected] = useState(Page)
    const [html, setHtml] = useState("")
    const [width, setWidth] = useState(window.innerWidth)

    var sideBar = document.querySelector('.sidebar-main-container')
    useEffect(() => {
        if(Page  < List.length){
            if(List[Page].path == ''){
                setSelected(0)
            }
        }else{
            setSelected(0)
        }

        console.log(List[selected].path)
        fetch(List[selected].path)
            .then((res) => res.text())
            .then((text) => setHtml(text))      

    }, [selected])

    useEffect(() => {
        window.addEventListener('resize', () => {setWidth(window.innerWidth)})
        return () => window.removeEventListener('resize', () => {setWidth(window.innerWidth)})
    }, [])

    return (
        <div>
            <div style={{
                zIndex: width < 720?'3':'0',
                marginTop: width < 720?'50px':'0'
            }} className="sidebar-main-container">
                {
                    List.map((e, i) => {
                        return (
                            <div onClick={() => {
                                navigate(e.link)
                                setSelected(i)
                            }
                        } key={i} className="sidebar-list">
                                <img style={{transform: selected == i ? 'rotate(90deg)':'none'}} src={Arrow}/>
                                <p style={{color: selected==i?'#52a2da':''}}>{e.title}</p>
                            </div>
                        )
                })}
            </div>
            
            <div style={{width: width > 720 ? `${width - 220}px`:''}} className="toggle-side-bar">
                <img id="img1" src={HamMenu} onClick={() => {
                        sideBar.classList.toggle('is-close')
                }}/>
                <p>{Title}</p>
                <img id="img2" src={Next} onClick={() => {
                    if(selected > 0){
                        setSelected(selected - 1)
                    }else{
                        navigate(-1)
                    }
                }}/>

                <img id="img3" src={Next} onClick={() => {
                    if(selected < (List.length - 1)){
                        if(List[selected + 1].path){
                            setSelected(selected + 1)
                        }else{
                            navigate(List[selected + 1].link)
                        }
                    }
                }}/>
            </div>

            <div onClick={() => sideBar.classList.toggle('is-close')} className="text-docs-container">
                <ReactMarkdown children={html} components={{
                    code(props) {
                        const {children, className, node, ...rest} = props
                        const match = /language-(\w+)/.exec(className || '')
                        return match ? (
                          <SyntaxHighlighter
                            {...rest}
                            PreTag="div"
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            style={atomDark}
                          />
                        ) : (
                          <code {...rest} className={className}>
                            {children}
                          </code>
                        )
                      }
                }}/>
            </div>

        </div>
    )
}

export default Sidebar