var Tittle = React.createClass({
            render: function() {
                return <div className="titulo">
                        <h1>Music Garage</h1>
                        <p>The website for your music</p>
                        </div>; 
            }
        });
var Note = React.createClass({
    edit: function() {
        alert('editing note'+ document.getElementById('title_input').value);
    },
    remove: function() {
        alert('removing note');
    },
    render: function() {
        return (
            <div className="note">
                <h3>Create an album</h3>
                <form>
                <div>
                    <label>Tittle</label>
                    <input type="text" id="title_input"/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Rating</label>
                    <input type="text"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.edit}>Submit</button>
                </form>
            </div>
            );
    }
});
React.render(<div>
    <Tittle/>
    <Note/>
    </div>, 
    document.getElementById('react-container'));

