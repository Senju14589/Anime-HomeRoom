import './CSS/AppSearch.css';
function AppSearch(props) {
    const { value, onValueChang } = props;
    return (
        <div className='app-search'>
            <input className='app-search-input'
                type='text'
                placeholder='ค้นหาอนิเมะที่คุณสนใจ'
                value={value}
                onChange={(event) => { onValueChang(event.target.value) }} />
        </div>
    );
}

export default AppSearch;