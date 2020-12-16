


function Title(props) {
    const name = props.name
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}






const main = <div>
    <Title name="françois" />
   
</div>


ReactDOM.render(main, document.getElementById('app'));