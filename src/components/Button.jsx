import Button from 'react-bootstrap/Button';

export const ButtonComponent = ({ className, text, type, onClick }) => {
    return <Button variant="warning" size="sm" className={className} type={type} onClick={onClick}>{text}</Button>
    
}