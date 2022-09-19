import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Zoom } from '@mui/material';

export const CategoryCard = ({id, name}) => {
  const [ checked, setChecked ] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setChecked(true);
  }, [])

  const handleClick = () => {
    navigate(`/categories/${name}`, { replace: true, state: { name: name, id: id} });
  }

  return (
    <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
      <div className="category" onClick={handleClick}>{name}</div>
    </Zoom>
  )
}
