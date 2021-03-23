class Modal {
    constructor(el, options = {}) {
      this.openModal = this.openModal.bind(this)
      this.closeModal = this.closeModal.bind(this)
      this.handleClick = this.handleClick.bind(this)
  
      this.modal = this.createModalNode(options)
      el.addEventListener('click', this.openModal)
    }
  
    openModal () {
      document.body.appendChild(this.modal)
    }
  
    closeModal () {
      this.modal.remove()
    }
  
    createModalNode (options) {
      const { title, content } = options
      const node = document.createElement('aside')
      node.className = 'modal modal--open'
      node.addEventListener('click', this.handleClick)
      node.innerHTML =  `
          <section class="modal__container">
            <header class="modal__header">
              <h2 class="modal__title">${title}</h2>
            </header>
            <section class="modal__content">
              <p>${content}</p>
            </section>
            <footer class="modal__footer">
              <button class="modal__btn-cancel">
                Cancel
              </button>
              <button class="modal__btn-delete">
                Delete
              </button>
            </footer>
          </section>
      `
      return node
    }
  
    handleClick (e) {
      const closeClasses = [
        'modal__btn-cancel',
        'modal__btn-delete',
        'modal modal--open',
      ]
      if (closeClasses.indexOf(e.target.className) > -1) {
        this.closeModal()
      }
    }
  }
  
  const modal = new Modal(document.getElementById('delete'), {
    title: 'This is a new custom title',
    content: 'Any content can go here',
  })