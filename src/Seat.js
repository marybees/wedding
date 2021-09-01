import React, { useState } from "react";
import { Row, Col, Input } from 'antd';

function Seat() {

    const [lookup, setLookup] = useState('');

    const { Search } = Input;

    const guestList = [
        {
          "name": "Maria Naggaga",
          "table": "#3 Montreal, Canada, Seat #1"
        },
        {
          "name": "Mike Baker",
          "table": "#6 Paris, France, Seat #8"
        },
        {
          "name": "Marian Baker",
          "table": "#6 Paris, France, Seat #7"
        },
        {
          "name": "Noël Briand",
          "table": "#6 Paris, France, Seat #9"
        },
        {
          "name": "Donna Higgie",
          "table": "#7 Cape Cod, USA, Seat #5"
        },
        {
          "name": "Sima Melnikova",
          "table": "#2 Bali, Indonesia, Seat #7"
        },
        {
          "name": "Daniel Balaban",
          "table": "#2 Bali, Indonesia, Seat #8"
        },
        {
          "name": "Alex McKenzie",
          "table": "#14 Rome, Italy, Seat #8"
        },
        {
          "name": "Alex Topiler",
          "table": "#13 Split, Croatia, Seat #7"
        },
        {
          "name": "Talia Topiler",
          "table": "#13 Split, Croatia, Seat #8"
        },
        {
          "name": "Andres Barbaro",
          "table": "#14 Rome, Italy, Seat #7"
        },
        {
          "name": "David Morin",
          "table": "#1 Arenys de Mar, Spain, Seat #2"
        },
        {
          "name": "Letisha Morin",
          "table": "#1 Arenys de Mar, Spain, Seat #1"
        },
        {
          "name": "Erin Griffith",
          "table": "#7 Cape Cod, USA, Seat #7"
        },
        {
          "name": "Chris Griffith",
          "table": "#7 Cape Cod, USA, Seat #6"
        },
        {
          "name": "CJ Griffith",
          "table": "#8 Paros, Greece, Seat #5"
        },
        {
          "name": "Wesley Griffith",
          "table": "#7 Cape Cod, USA, Seat #8"
        },
        {
          "name": "Evelyn Cahoon",
          "table": "#1 Arenys de Mar, Spain, Seat #5"
        },
        {
          "name": "Brian Cahoon",
          "table": "#1 Arenys de Mar, Spain, Seat #4"
        },
        {
          "name": "Frankie Nwfaili",
          "table": "#14 Rome, Italy, Seat #3"
        },
        {
          "name": "Chidi Orji",
          "table": "#14 Rome, Italy, Seat #4"
        },
        {
          "name": "John Joiner",
          "table": "#12 Playa Del Carmen, Mexico, Seat #2"
        },
        {
          "name": "Jon Denney",
          "table": "#7 Cape Cod, USA, Seat #4"
        },
        {
          "name": "KB Legler",
          "table": "#10 Zambezi River, Zimbabwe, Seat #4"
        },
        {
          "name": "Brynn Legler",
          "table": "#10 Zambezi River, Zimbabwe, Seat #1"
        },
        {
          "name": "Kennedy Legler",
          "table": "#10 Zambezi River, Zimbabwe, Seat #2"
        },
        {
          "name": "Emmale Legler",
          "table": "#10 Zambezi River, Zimbabwe, Seat #3"
        },
        {
          "name": "Melissa Axtell",
          "table": "#13 Split, Croatia, Seat #2"
        },
        {
          "name": "John Axtell",
          "table": "#13 Split, Croatia, Seat #1"
        },
        {
          "name": "Petra Baker",
          "table": "#4 Cape Town, South Africa, Seat #3"
        },
        {
          "name": "Ryan Baker",
          "table": "#7 Cape Cod, USA, Seat #3"
        },
        {
          "name": "Stephen Joiner",
          "table": "#9 Playa Grande, Costa Rica, Seat #6"
        },
        {
          "name": "Diane Joiner",
          "table": "#9 Playa Grande, Costa Rica, Seat #7"
        },
        {
          "name": "Tony Henriques",
          "table": "#1 Arenys de Mar, Spain, Seat #9"
        },
        {
          "name": "Lina Henriques",
          "table": "#1 Arenys de Mar, Spain, Seat #10"
        },
        {
          "name": "Bev Collins",
          "table": "#9 Playa Grande, Costa Rica, Seat #4"
        },
        {
          "name": "Leo Collins",
          "table": "#9 Playa Grande, Costa Rica, Seat #5"
        },
        {
          "name": "Cheryl Williams",
          "table": "#1 Arenys de Mar, Spain, Seat #6"
        },
        {
          "name": "Nat Williams",
          "table": "#1 Arenys de Mar, Spain, Seat #7"
        },
        {
          "name": "Chris Oakes",
          "table": "#8 Paros, Greece, Seat #7"
        },
        {
          "name": "LisaMarie Wands",
          "table": "#8 Paros, Greece, Seat #8"
        },
        {
          "name": "Daniel Maloney",
          "table": "#13 Split, Croatia, Seat #6"
        },
        {
          "name": "Erin Rodriguez",
          "table": "#5 New York, USA, Seat #1"
        },
        {
          "name": "Mark Rodriguez",
          "table": "#5 New York, USA, Seat #2"
        },
        {
          "name": "Michael Rodriguez",
          "table": "#5 New York, USA, Seat #3"
        },
        {
          "name": "James Rodriguez",
          "table": "#5 New York, USA, Seat #4"
        },
        {
          "name": "Gary Sjolin",
          "table": "#1 Arenys de Mar, Spain, Seat #3"
        },
        {
          "name": "Heather Jackson",
          "table": "#3 Montreal, Canada, Seat #6"
        },
        {
          "name": "Geoff Puley",
          "table": "#3 Montreal, Canada, Seat #5"
        },
        {
          "name": "Jenn Gaunt",
          "table": "#5 New York, USA, Seat #8"
        },
        {
          "name": "Simon Gaunt",
          "table": "#5 New York, USA, Seat #7"
        },
        {
          "name": "Oliver Gaunt",
          "table": "#5 New York, USA, Seat #5"
        },
        {
          "name": "Thatcher Gaunt",
          "table": "#5 New York, USA, Seat #6"
        },
        {
          "name": "Khaliq Gant",
          "table": "#8 Paros, Greece, Seat #4"
        },
        {
          "name": "Ingrid Magnus",
          "table": "#8 Paros, Greece, Seat #3"
        },
        {
          "name": "Luke Kingma",
          "table": "#2 Bali, Indonesia, Seat #6"
        },
        {
          "name": "Alison Entin",
          "table": "#2 Bali, Indonesia, Seat #5"
        },
        {
          "name": "Mary Cleary",
          "table": "#9 Playa Grande, Costa Rica, Seat #3"
        },
        {
          "name": "Adam Tucker",
          "table": "#12 Playa Del Carmen, Mexico, Seat #6"
        },
        {
          "name": "Tiana Souza",
          "table": "#9 Playa Grande, Costa Rica, Seat #2"
        },
        {
          "name": "Janaya Tucker",
          "table": "#12 Playa Del Carmen, Mexico, Seat #4"
        },
        {
          "name": "Kaya Tucker",
          "table": "#12 Playa Del Carmen, Mexico, Seat #5"
        },
        {
          "name": "Jonas Souza",
          "table": "#9 Playa Grande, Costa Rica, Seat #1"
        },
        {
          "name": "Nicole Cleary",
          "table": "#12 Playa Del Carmen, Mexico, Seat #3"
        },
        {
          "name": "Sam Provenza",
          "table": "#14 Rome, Italy, Seat #2"
        },
        {
          "name": "Sandra Denney",
          "table": "#6 Paris, France, Seat #2"
        },
        {
          "name": "Sarah Baker",
          "table": "#6 Paris, France, Seat #5"
        },
        {
          "name": "Scott Floeck",
          "table": "#11 Rio de Janeiro, Brazil, Seat #7"
        },
        {
          "name": "Donna Floeck",
          "table": "#11 Rio de Janeiro, Brazil, Seat #8"
        },
        {
          "name": "Danielle Floeck",
          "table": "#11 Rio de Janeiro, Brazil, Seat #6"
        },
        {
          "name": "Staci Makovich",
          "table": "#3 Montreal, Canada, Seat #2"
        },
        {
          "name": "Sue Washburn",
          "table": "#8 Paros, Greece, Seat #1"
        },
        {
          "name": "Rik Washburn",
          "table": "#8 Paros, Greece, Seat #2"
        },
        {
          "name": "Trish Baker",
          "table": "#4 Cape Town, South Africa, Seat #2"
        },
        {
          "name": "Kerry Baker",
          "table": "#4 Cape Town, South Africa, Seat #1"
        },
        {
          "name": "Adam Oakes",
          "table": "#8 Paros, Greece, Seat #6"
        },
        {
          "name": "Ana Rivas",
          "table": "#3 Montreal, Canada, Seat #7"
        },
        {
          "name": "Hansaka Kumarasinghe",
          "table": "#3 Montreal, Canada, Seat #8"
        },
        {
          "name": "Carolyn Chrzan",
          "table": "#1 Arenys de Mar, Spain, Seat #8"
        },
        {
          "name": "Chris Merrick",
          "table": "#11 Rio de Janeiro, Brazil, Seat #3"
        },
        {
          "name": "Emilia Navarro",
          "table": "#14 Rome, Italy, Seat #1"
        },
        {
          "name": "James Denney",
          "table": "#4 Cape Town, South Africa, Seat #7"
        },
        {
          "name": "Alex Denney",
          "table": "#4 Cape Town, South Africa, Seat #8"
        },
        {
          "name": "Jason Becknell",
          "table": "#10 Zambezi River, Zimbabwe, Seat #9"
        },
        {
          "name": "Manal Becknell",
          "table": "#10 Zambezi River, Zimbabwe, Seat #10"
        },
        {
          "name": "Jason Tarre",
          "table": "#13 Split, Croatia, Seat #5"
        },
        {
          "name": "Jeff Denney",
          "table": "#6 Paris, France, Seat #1"
        },
        {
          "name": "Jennifer Howard",
          "table": "#9 Playa Grande, Costa Rica, Seat #8"
        },
        {
          "name": "Jim Denney",
          "table": "#4 Cape Town, South Africa, Seat #6"
        },
        {
          "name": "Sue Denney",
          "table": "#4 Cape Town, South Africa, Seat #5"
        },
        {
          "name": "John Ryan",
          "table": "#10 Zambezi River, Zimbabwe, Seat #7"
        },
        {
          "name": "Caleigh Ryan",
          "table": "#10 Zambezi River, Zimbabwe, Seat #6"
        },
        {
          "name": "Joseph Pignatelli",
          "table": "#11 Rio de Janeiro, Brazil, Seat #2"
        },
        {
          "name": "Donna Pignatelli",
          "table": "#11 Rio de Janeiro, Brazil, Seat #1"
        },
        {
          "name": "Kevin Bartlett-Hallberg",
          "table": "#3 Montreal, Canada, Seat #3"
        },
        {
          "name": "Robbie Bartlett-Hallberg",
          "table": "#3 Montreal, Canada, Seat #4"
        },
        {
          "name": "Lisa Denney",
          "table": "#6 Paris, France, Seat #3"
        },
        {
          "name": "Ted Barnett",
          "table": "#6 Paris, France, Seat #6"
        },
        {
          "name": "Luke Hristou",
          "table": "#11 Rio de Janeiro, Brazil, Seat #5"
        },
        {
          "name": "Marty Jones",
          "table": "#14 Rome, Italy, Seat #6"
        },
        {
          "name": "Julia Lamorelle",
          "table": "#14 Rome, Italy, Seat #5"
        },
        {
          "name": "Matt Joiner",
          "table": "#12 Playa Del Carmen, Mexico, Seat #8"
        },
        {
          "name": "Gillian Wasner",
          "table": "#12 Playa Del Carmen, Mexico, Seat #7"
        },
        {
          "name": "Matt Rapoport",
          "table": "#10 Zambezi River, Zimbabwe, Seat #8"
        },
        {
          "name": "Megan Flynn",
          "table": "#2 Bali, Indonesia, Seat #4"
        },
        {
          "name": "Mike Berkowitz",
          "table": "#2 Bali, Indonesia, Seat #3"
        },
        {
          "name": "Melissa Papadimas",
          "table": "#2 Bali, Indonesia, Seat #1"
        },
        {
          "name": "Dennis Papadimas",
          "table": "#2 Bali, Indonesia, Seat #2"
        },
        {
          "name": "Paul Jump",
          "table": "#10 Zambezi River, Zimbabwe, Seat #5"
        },
        {
          "name": "Stephen Siu",
          "table": "#13 Split, Croatia, Seat #4"
        },
        {
          "name": "Dom Fung",
          "table": "#13 Split, Croatia, Seat #3"
        },
        {
          "name": "Travis Dempsey",
          "table": "#11 Rio de Janeiro, Brazil, Seat #4"
        },
        {
          "name": "Amanda Geiger",
          "table": "#12 Playa Del Carmen, Mexico, Seat #1"
        },
        {
            "name": "Mary Washburn",
          "table": "Cape Cod, USA"
        },
        {
            "name": "Will Washburn",
          "table": "Cape Cod, USA"
        },
        {
            "name": "Darren Baker",
          "table": "Paris, France"
        },
    ]

    const filteredGuests = guestList.filter((guest) => {
        return guest.name.toLowerCase().includes(lookup.toLowerCase())
    })

    console.log({filteredGuests})

    return (
    <div style={{paddingTop: '8rem'}}>
        <h1 className='pageTitle'>Find <span>Your</span> Seat</h1>
        <Row style={{ marginBottom: '3rem' }}>
            <Col span={6} />
            <Col span={12}>
                <Search placeholder="Search for your name" onChange={e => setLookup(e.target.value)} />
                {lookup && (filteredGuests.map((guest, index) => (
                    <p key={index}>{guest.name}:
                    <br/>
                    Table: {guest.table}</p>
                )))}
            </Col>
            <Col span={6} />
        </Row>
        <Row className='dayOf'>
            <Col style={{ backgroundColor: '#E8DDCD'}} className='subtitleDayOf' s={24} lg={12} align='center'>
                <h3>Arenys De Mar, Spain</h3>
                <p>Letisha Morin</p>
                <p>David Morin</p>
                <p>Gary Sjolin</p>
                <p>Brian Cahoon</p>
                <p>Evelyn Cahoon</p>
                <p>Cheryl Williams</p>
                <p>Nat Williams</p>
                <p>Carolyn Chrzan</p>
                <p>Tony Henriques</p>
                <p>Lina Henriques</p>
            </Col>
            <Col style={{ backgroundColor: '#E3D9CA'}} className='subtitleDayOf' s={24} lg={12}  align='center'>
                <h3>Bali, Indonesia</h3>
                <p>Melissa Papadimas</p>
                <p>Dennis Papadimas</p>
                <p>Mike Berkowitz</p>
                <p>Megan Flynn</p>
                <p>Alison Entin</p>
                <p>Luke Kingma</p>
                <p>Sima Melnikova</p>
                <p>Daniel Balaban</p>
            </Col>
        </Row>
        <Row className='dayOf'>
            <Col style={{ backgroundColor: '#E9E2D7'}} className='subtitleDayOf' s={24} lg={12}  align='center'>
                <h3>Montreal, Canada</h3>
                <p>Maria Naggaga</p>
                <p>Staci Makovich</p>
                <p>Kevin Bartlett-Hallberg</p>
                <p>Robbie Bartlett-Hallberg</p>
                <p>Geoff Puley</p>
                <p>Heather Jackson</p>
                <p>Ana Rivas</p>
                <p>Hansaka Kumarasinghe</p>
            </Col>
            <Col style={{ backgroundColor: '#E7DED4'}} className='subtitleDayOf' s={24} lg={12}  align='center'>
                <h3>Cape Town, South Africa</h3>
                <p>Kerry Baker</p>
                <p>Trish Baker</p>
                <p>Petra Baker</p>
                <p>Sue Denney</p>
                <p>Jim Denney</p>
                <p>James Denney</p>
                <p>Alex Denney</p>
            </Col>
        </Row>
        <Row className='dayOf'>
            <Col style={{ backgroundColor: '#E8DDCD'}} className='subtitleDayOf' s={24} lg={12}  align='center'>
                <h3>New York, USA</h3>
                <p>Erin Rodriguez</p>
                <p>Mark Rodriguez</p>
                <p>Michael Rodriguez</p>
                <p>James Rodriguez</p>
                <p>Oliver Gaunt</p>
                <p>Thatcher Gaunt</p>
                <p>Simon Gaunt</p>
                <p>Jenn Gaunt</p>
            </Col>
            <Col style={{ backgroundColor: '#E3D9CA'}} className='subtitleDayOf' s={24} lg={12}  align='center'>
                <h3>Paris, France</h3>
                <p>Jeff Denney</p>
                <p>Sandra Denney</p>
                <p>Lisa Denney</p>
                <p>Darren Baker</p>
                <p>Sarah Baker</p>
                <p>Ted Barnett</p>
                <p>Marian Baker</p>
                <p>Mike Baker</p>
                <p>Noël Briand</p>
            </Col>
        </Row>
        <Row className='dayOf'>
            <Col style={{ backgroundColor: '#E9E2D7'}} className='subtitleDayOf' s={24} lg={12}  align='center'>
                <h3>Cape Cod, USA</h3>
                <p>Will Washburn</p>
                <p>Mary Washburn</p>
                <p>Ryan Baker</p>
                <p>Jon Denney</p>
                <p>Donna Higgie</p>
                <p>Chris Griffith</p>
                <p>Erin Griffith</p>
                <p>Wesley Griffith</p>
            </Col>
            <Col style={{ backgroundColor: '#E7DED4'}} className='subtitleDayOf' s={24} lg={12}  align='center'>
                <h3>Paros, Greece</h3>
                <p>Sue Washburn</p>
                <p>Rik Washburn</p>
                <p>Ingrid Magnus</p>
                <p>Khaliq Gant</p>
                <p>CJ Griffith</p>
                <p>Adam Oakes</p>
                <p>Chris Oakes</p>
                <p>LisaMarie Wands</p>
=            </Col>
        </Row>
        <Row className='dayOf'>
            <Col style={{ backgroundColor: '#E8DDCD'}} className='subtitleDayOf' s={24} lg={12} align='center'>
                <h3>Playa Grande, Costa Rica</h3>
                <p>Tiana Souza</p>
                <p>Mary Cleary</p>
                <p>Bev Collins</p>
                <p>Leo Collins</p>
                <p>Stephen Joiner</p>
                <p>Diane Joiner</p>
                <p>Jennifer Howard</p>
                <p>Jonas Souza</p>
            </Col>
            <Col style={{ backgroundColor: '#E3D9CA'}} className='subtitleDayOf' s={24} lg={12} align='center'>
                <h3>Zambezi River, Zimbabwe</h3>
                <p>Brynn Legler</p>
                <p>Kennedy Legler</p>
                <p>Emmale Legler</p>
                <p>KB Legler</p>
                <p>Paul Jump</p>
                <p>Caleigh Ryan</p>
                <p>John Ryan</p>
                <p>Matt Rapoport</p>
                <p>Jason Becknell</p>
                <p>Manal Becknell</p>
            </Col>
        </Row>
        <Row className='dayOf'>
            <Col style={{ backgroundColor: '#E9E2D7'}} className='subtitleDayOf' s={24} lg={12} align='center'>
                <h3>Rio de Janeiro, Brazil</h3>
                <p>Donna Pignatelli</p>
                <p>Joseph Pignatelli</p>
                <p>Chris Merrick</p>
                <p>Travis Dempsey</p>
                <p>Luke Hristou</p>
                <p>Danielle Floeck</p>
                <p>Scott Floeck</p>
                <p>Donna Floeck</p>
            </Col>
            <Col style={{ backgroundColor: '#E7DED4'}} className='subtitleDayOf' s={24} lg={12} align='center'>
                <h3>Playa del Carmen, Mexico</h3>
                <p>Amanda Geiger</p>
                <p>John Joiner</p>
                <p>Nicole Cleary</p>
                <p>Janaya Tucker</p>
                <p>Kaya Tucker</p>
                <p>Adam Tucker</p>
                <p>Gillian Wasner</p>
                <p>Matt Joiner</p>
            </Col>
        </Row>
        <Row className='dayOf'>
            <Col style={{ backgroundColor: '#E8DDCD'}} className='subtitleDayOf' s={24} lg={12} align='center'>
                <h3>Split, Croatia</h3>
                <p>John Axtell</p>
                <p>Melissa Axtell</p>
                <p>Dom Fung</p>
                <p>Stephen Siu</p>
                <p>Jason Tarre</p>
                <p>Daniel Maloney</p>
                <p>Alex Topiler</p>
                <p>Talia Topiler</p>
            </Col>
            <Col style={{ backgroundColor: '#E3D9CA'}} className='subtitleDayOf' s={24} lg={12} align='center'>
                <h3>Rome, Italy</h3>
                <p>Emilia Navarro</p>
                <p>Sam Provenza</p>
                <p>Frankie Nwfaili</p>
                <p>Chidi Orji</p>
                <p>Julia Lamorelle</p>
                <p>Marty Jones</p>
                <p>Andres Barbaro</p>
                <p>Alex McKenzie</p>
            </Col>
        </Row>
        </div>
    );
}

export default Seat;