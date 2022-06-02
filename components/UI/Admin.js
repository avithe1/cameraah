import classes from './Admin.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBell, faHome, faMobilePhone, faAdd, faPlaceOfWorship, faShuttleSpace, faMonument, faRankingStar, faUser, faCalendar } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';


const Admin = () => {
    return (
        <div className={classes.app__container}>
            <div className={classes.sidebar}>
                <section className={classes.menu}>
                    <button className={classes.menu__button}>
                        <FontAwesomeIcon icon={faCoffee} className={classes.menu__icon} size="sm" />
                    </button>
                    <button className={classes.menu__button}>
                        <FontAwesomeIcon icon={faBell} className={classes.menu__icon} />
                    </button>
                    <button className={classes.menu__button}>
                        <FontAwesomeIcon icon={faHome} className={classes.menu__icon} />
                    </button>
                    <button className={classes.menu__button}>
                        <FontAwesomeIcon icon={faMobilePhone} className={classes.menu__icon} />
                    </button>
                    <button className={classes.menu__button}>
                        <FontAwesomeIcon icon={faAdd} className={classes.menu__icon} />
                    </button>

                </section>
            </div>

            <section className={classes.main}>

                <div className={classes.maincontainer}>
                    <div className={classes.main_top}>
                        <div className={classes.dashtext}>Dashboard</div>
                        <div>
                            <input className={classes.searchbox} type="text" placeholder='Search' />
                        </div>
                    </div>

                    <div className={classes.main_cards}>
                        <div className={classes.cardcontainer}>
                            <FontAwesomeIcon icon={faPlaceOfWorship} className={classes.card__icon} size="lg" />
                            <p className={classes.cardtext}>First card</p>
                            <p className={classes.cardtext}>First card description</p>
                            <p className={classes.carddollar}>1500$</p>
                        </div>

                        <div className={classes.cardcontainer}>
                            <FontAwesomeIcon icon={faShuttleSpace} className={classes.card__icon} size="lg" />
                            <p className={classes.cardtext}>Second card</p>
                            <p className={classes.cardtext}>Second card description</p>
                            <p className={classes.carddollar}>900$</p>
                        </div>

                        <div className={classes.cardcontainer}>
                            <FontAwesomeIcon icon={faMonument} className={classes.card__icon} size="lg" />
                            <p className={classes.cardtext}>Third card</p>
                            <p className={classes.cardtext}>Third card description</p>
                            <p className={classes.carddollar}>100$</p>
                        </div>

                        <div className={classes.cardcontainer}>
                            <FontAwesomeIcon icon={faRankingStar} className={classes.card__icon} size="lg" />
                            <p className={classes.cardtext}>Fourth card</p>
                            <p className={classes.cardtext}>Fourth card description</p>
                            <p className={classes.carddollar}>1800$</p>
                        </div>
                    </div>


                    <div className={classes.main_graph}>
                        <div className={classes.graphheading}>
                            <div className={classes.graphheadingleft}>
                                1500$
                            </div>
                            <div className={classes.graphheadingright}>
                                2nd June 2022
                            </div>
                        </div>
                        <div className={classes.graph}>
                            <div className={classes.graphbar}></div>
                            <div className={classes.graphbar}></div>
                            <div className={classes.graphbar}></div>
                            <div className={classes.graphbar}></div>
                            <div className={classes.graphbar}></div>
                            <div className={classes.graphbar}></div>
                            <div className={classes.graphbar}></div>
                            <div className={classes.graphbar}></div>
                            <div className={classes.graphbar}></div>
                        </div>
                    </div>


                    <div className={classes.main_history}>
                        <div className={classes.historyheading}>
                            <div className={classes.graphheadingleft}>
                                History
                            </div>
                            <div className={classes.historysmall}>
                                Transactions of last 6 months
                            </div>
                        </div>
                        <div className={classes.historylist}>
                        </div>
                    </div>
                </div>

            </section>

            <main className={classes.panel}>

                <div className={classes.paneliconscontainer}>
                    <div clasName={classes.paneliconbox}><FontAwesomeIcon icon={faCalendar} className={classes.panelicon} size="lg" /></div>
                    <div clasName={classes.paneliconbox}><FontAwesomeIcon icon={faBell} className={classes.panelicon} size="lg" /></div>
                    <div clasName={classes.paneliconbox}><FontAwesomeIcon icon={faUser} className={classes.panelicon} size="lg" /></div>
                </div>

                <div className={classes.creditcardcontainer}>
                    <Image src="https://www.mastercard.com.hk/content/dam/public/mastercardcom/hk/en/consumer/find-a-card/cards/world-mastercard_1280x720.png"
                        height="300px" width="500px"></Image>
                </div>

                <div className={classes.recentcontainer}>
                    <div className={classes.historyheading}>
                        <div className={classes.panelheading}>
                            Recent activity
                        </div>
                    </div>
                    <div className={classes.historylist}>
                        <ul className={classes["list-group"]}>
                            <li>ABC
                                <span className={classes.badge}>def</span>
                            </li>
                            <li>ABC
                                <span className={classes.badge}>def</span>
                            </li>
                            <li>ABC
                                <span className={classes.badge}>def</span>
                            </li>
                            <li>ABC
                                <span className={classes.badge}>def</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={classes.upcomingcontainer}>
                    <div className={classes.historyheading}>
                        <div className={classes.panelheading}>
                            Upcoming payments
                        </div>
                    </div>
                    <div className={classes.historylist}>
                        <ul className={classes["list-group"]}>
                            <li>ABC
                                <span className={classes.badge}>def</span>
                            </li>
                            <li>ABC
                                <span className={classes.badge}>def</span>
                            </li>
                            <li>ABC
                                <span className={classes.badge}>def</span>
                            </li>
                            <li>ABC
                                <span className={classes.badge}>def</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default Admin;