const Footer = () => {
    const date = new Date()
    return (
        <footer>
         <p>Copywright &copy; {date.getFullYear()}</p>
        </footer>
    )
}   

export default Footer