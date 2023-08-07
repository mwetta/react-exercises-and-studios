export default function HobbyLinks() {
        const hobbyLinks = ['https://www.ravelry.com', 'https://app.thestorygraph.com']
        return  (
            <div>
                <p>
                    <a href = {hobbyLinks[0]}>ravelry</a>
                </p>
                <p>
                    <a href = {hobbyLinks[1]}>the storygraph</a>
                </p>
            </div>
        );
}