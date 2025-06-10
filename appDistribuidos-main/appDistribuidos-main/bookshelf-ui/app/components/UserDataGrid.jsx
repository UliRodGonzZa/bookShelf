'use client';
import { DataGrid } from '@mui/x-data-grid';
import { useUsers } from '../hooks/useUsers';

export default function UserDataGrid() {
  const { users } = useUsers();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'username', headerName: 'Username', width: 150 },
    { field: 'name', headerName: 'Nombre', width: 150 },
    { field: 'lastname', headerName: 'Apellido', width: 150 }
  ];

  return (
    <div style={{ height: 400, width: '100%', marginTop: '2rem' }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
      />
    </div>
  );
}
