import { createStore, useDispatch } from "react-redux";

const store = createStore(slice.reducer);
const Input = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValue(e.target.value);
        dispatch(slice.actions.setValue(e.target.value));
    };
    return (
        <h1>!Me</h1>
    );
};