

export default function PortfolioBox(props) {
    //const [isHovered, setIsHovered] = useState(false);
    const boxStyle = {
        opacity: '0.75',
    };

    // Helper functions here

    // Return HTML
    return (
        <div className="container">
            <div className="box" style={boxStyle}>
                <img
                    className="box-img-top"
                    src={`src/components/images/smartMirror.png`}
                />
            </div>

        </div>
    
    );
}