import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function FreedomWall() {
    const [notes, setNotes] = useState([]);
    const [textInput, setTextInput] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [noteColor, setNoteColor] = useState('#fff9c4'); 

    const colorChoices = ['#fff9c4', '#ffcdd2', '#c8e6c9', '#bbdefb', '#e1bee7'];

    // Get notes from DB
    const getNotes = async () => {
        const { data, error } = await supabase
            .from('freedom_wall')
            .select('*')
            .order('created_at', { ascending: false });
        
        if (!error && data) {
            setNotes(data);
        }
    };

    useEffect(() => {
        getNotes();
    }, []);

    // Save note to DB
    const saveNote = async (e) => {
        e.preventDefault();
        if (!textInput.trim()) return;

        const finalName = authorName.trim() ? authorName : 'Anonymous';

        const { error } = await supabase
            .from('freedom_wall')
            .insert([{ content: textInput, color: noteColor, author_name: finalName }]);

        if (!error) {
            setTextInput('');
            setAuthorName('');
            getNotes(); 
        } else {
            alert('Something went wrong.');
        }
    };

    return (
        <section id="freedom-wall" className="details-section">
            <h3 className="section-label">🧱 Freedom Wall</h3>
            <div className="row g-4">
                <div className="col-md-4">
                    <div className="toph-card">
                        <h4>Leave a Note!</h4>
                        <form onSubmit={saveNote}>
                            <input 
                                type="text" 
                                className="form-control mb-2" 
                                placeholder="Your Name (optional)"
                                value={authorName}
                                onChange={(e) => setAuthorName(e.target.value)}
                            />
                            <textarea 
                                className="form-control mb-3" 
                                rows="4" 
                                placeholder="What's on your mind?"
                                value={textInput}
                                onChange={(e) => setTextInput(e.target.value)}
                                required
                            ></textarea>
                            <div className="d-flex gap-2 mb-3">
                                {colorChoices.map(color => (
                                    <div 
                                        key={color}
                                        onClick={() => setNoteColor(color)}
                                        style={{ 
                                            width: '30px', 
                                            height: '30px', 
                                            backgroundColor: color, 
                                            borderRadius: '50%', 
                                            cursor: 'pointer',
                                            border: noteColor === color ? '3px solid #1b3664' : '1px solid #ccc'
                                        }}
                                    ></div>
                                ))}
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Post Note</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="d-flex flex-wrap gap-3">
                        {notes.map((note) => (
                            <div 
                                key={note.id} 
                                style={{
                                    backgroundColor: note.color,
                                    padding: '20px',
                                    borderRadius: '8px',
                                    width: '200px',
                                    minHeight: '200px',
                                    boxShadow: '3px 3px 10px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    color: '#222'
                                }}
                            >
                                {}
                                <p style={{ margin: 0, fontWeight: '500', wordWrap: 'break-word', color: '#222' }}>{note.content}</p>
                                
                                {}
                                <small style={{ marginTop: '15px', color: '#444', fontStyle: 'italic', alignSelf: 'flex-end' }}>
                                    - {note.author_name || 'Anonymous'}
                                </small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}