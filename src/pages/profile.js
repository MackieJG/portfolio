
import Nav from "../components/Nav.js"
export default function Profile() {

    return (
        <>
            < Nav />
            <div className={styles.container}> 

                <div className={styles.profile}>
                    <p>Hey! My name's Joshua and I've just completed the software development course with CodeClan. I come from Glasgow,
                        Scotland but have lived in Canada and Australia as well as Edinburgh working as a coffee professional managing some
                        of the best cafes and roasteries the world currently has. I've developed strong communication skillset based around
                        community as we looked to develop the business connection to the surround areas. I'm now looking to connect with companies
                        who are looking for a driven individual whohas a keen interest in self-growth and community driven work. Based on my background
                        in Glasgow I have a vested interest in developing those from disadvantaged backgrounds particularly in financial education.
                    </p>
                </div>
                <div className={styles.interests}>
                    <h4>Interests</h4>
                    <p>
                        I have a keen interest in AI and Machine Learning development in society. I attended the <a href="https://www.scottishaisummit.com/">Scottish Tech AI Summit</a>
                        this year which covered a range of topics from the future of AI in journalism to how AI will shape the future of art. Two particular talks of interest I enjoyed
                        were the Gary Marcus - Chat GPT: Godsend or disaster? which looked at what society should be worried about regarding AGI and Lex Fefegha - This Climate does not exist (yet)
                        which covered how generative AI could be used to conceptualise climate breakdown to highlight the urgent for action. 
                     </p>

                     <p>
                        I also have a keen interest in various sports including Football, MMA and Cycling. I'm a regular attendee at the Scotland National Team home games for the men and women's game.
                     </p>
                </div>


            </div>
        </>
    )
}