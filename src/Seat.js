import React, { useState } from "react";
import { Row, Col, Input } from 'antd';

function Seat() {

    const [lookup, setLookup] = useState('');

    const { Search } = Input;

    const guestList = [
        {
            name: "David Morin",
            table: 'Arenys de Mar, Spain',
            dancingScore: 0
        },
        {
            name: "Letisha Morin",
            table: 'Arenys de Mar, Spain',
            dancingScore: 0
        },
        {
            name: "Gary Sjolin",
            table: 'Arenys de Mar, Spain',
            dancingScore: 0
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