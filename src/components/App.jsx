import { useState } from "react";

function App(props) {

    let [text, setText] = useState("");


    let display = (value) => {
        let htmlText = "";
        let h1RegExp = /^# (.*$)/gim;
        let h2RegExp = /^## (.*$)/gim;
        let h3RegExp = /^### (.*$)/gim;
        let listRegExp = /^- (.*$)/gim;
        let codeBlockRegExp = /\```(.*?)```/gim
        let blockCode = /^> (.*$)/gim;




        htmlText = value
            .replaceAll(h1RegExp, `<h1>$1</h1>`)
            .replaceAll(h2RegExp, '<h2>$1</h2>')
            .replaceAll(h3RegExp, '<h3>$1</h3>')
            .replaceAll(listRegExp, '<li>$1</li>')
            .replace(codeBlockRegExp, '<pre class="code">$1</pre>')
            .replace(blockCode, '<pre class="block-code">$1</pre>')




        console.log(htmlText)
        setText(htmlText);
    }




    return (
        <>
            <div className="titles">
                <div className="title1">Markdown</div>
                <div className="title2">Preview</div>
            </div>
            <div className="container">

                <textarea name="" id="" className="textarea"

                    onChange={e => display(e.target.value)}


                ></textarea>



                <pre className="displayarea"
                    dangerouslySetInnerHTML={{ __html: text }}
                />

            </div>
        </>

    )
}

export default App;