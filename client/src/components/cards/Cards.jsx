import "./cards.scss"
function Cards() {
    const data = [
        {
            id: 1,
            day: "june",
            title: "10",
            subtitle: "Subtitle 1",
            description: "Description 1",
            image: "https://www.w3schools.com/html/img_chania.jpg"
        },
        {
            id: 2,
            day: "june",
            title: "20",
            subtitle: "Subtitle 2",
            description: "Description 2",
            image: "https://www.w3schools.com/html/img_chania.jpg"
        },
        {
            id: 3,
            day: "june",
            title: "30",
            subtitle: "Subtitle 3",
            description: "Description 3",
            image: "https://www.w3schools.com/html/img_chania.jpg"
        }
    ];
    return (
        <div className="container">
            {data.map((item) => (
                <div className="container_card" key={item.id}>
                    <div className="container_card-img">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="container_card-text">
                        <span><p>{item.day}</p>
                            <h1>{item.title}</h1></span>
                            
                     
                        <div className="container_card-text-desc">
                                <h2>{item.subtitle}</h2>
                            <p>{item.description}</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}

