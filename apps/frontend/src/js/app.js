// Inicialización de Lucide icons
lucide.createIcons();

// Variables globales
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('aside');
const addClientBtn = document.getElementById('add-client-btn');
const clientModal = document.getElementById('client-modal');
const closeModal = document.getElementById('close-modal');
const clientForm = document.getElementById('client-form');
const clientList = document.getElementById('client-list');

// Toggle sidebar
sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
});

// Modal functions
function openModal() {
    clientModal.classList.remove('hidden');
    clientModal.classList.add('fade-in');
}

function closeModalHandler() {
    clientModal.classList.add('hidden');
    clientModal.classList.remove('fade-in');
}

// Event listeners
addClientBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalHandler);

// Cerrar modal al hacer clic fuera
clientModal.addEventListener('click', (e) => {
    if (e.target === clientModal) {
        closeModalHandler();
    }
});

// Manejar envío del formulario
clientForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí irá la lógica para manejar el formulario
    closeModalHandler();
});

// Función para cargar clientes (ejemplo)
function loadClients() {
    // Aquí irá la lógica para cargar clientes desde una API
    const exampleClients = [
        { id: 1, name: 'Cliente Ejemplo 1', email: 'cliente1@ejemplo.com' },
        { id: 2, name: 'Cliente Ejemplo 2', email: 'cliente2@ejemplo.com' }
    ];
    
    renderClients(exampleClients);
}

// Función para renderizar clientes
function renderClients(clients) {
    clientList.innerHTML = clients.map(client => `
        <div class="p-4 border-b border-gray-200 hover:bg-gray-50">
            <div class="flex justify-between items-center">
                <div>
                    <h3 class="font-medium">${client.name}</h3>
                    <p class="text-sm text-gray-500">${client.email}</p>
                </div>
                <div class="flex space-x-2">
                    <button class="text-blue-600 hover:text-blue-800">
                        <i data-lucide="edit" class="h-4 w-4"></i>
                    </button>
                    <button class="text-red-600 hover:text-red-800">
                        <i data-lucide="trash-2" class="h-4 w-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Reinicializar icons después de renderizar
    lucide.createIcons();
}

// Cargar clientes al iniciar
document.addEventListener('DOMContentLoaded', loadClients); 