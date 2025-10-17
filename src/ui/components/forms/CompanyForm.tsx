import React, { useState } from "react";
import { useContract } from "../../hooks/useContract";

export const CompanyForm = () => {
  const { contract, loading, error, generateContract } = useContract();
    const [formData, setFormData] = useState({
      CompanyName: "",
      rutEmpresa: "",
      address: "",
      comuna: "",
      warehouseName: "",
      capacity: 0,
      rentalPrice: 0,  
      materialDeliveryDate: "",
      contractStartDate: "",
      contractEndDate: "",
      extensionDeadlineDays: 0,
      resinationDays: 0,
      responsiblePerson: "",
      responsiblePersonPosition: "",
      emailResponsiblePerson: "",
    });
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      const person = {
        id: "P-1",
        name: formData.CompanyName,
        rut: formData.rutEmpresa,
        address: formData.address,
        comuna: "Santiago",
      };
  
      const warehouse = {
        id: "W-1",
        name: formData.warehouseName,
        location: "Bodega Central",
        capacity: 100,
        number: "B-12",
        rentalPrice: formData.rentalPrice,
        materialDeliveryDate: new Date(),
        contractStartDate: new Date(),
        contractEndDate: new Date(),
        contractDurationDays: 365,
        extensionDeadlineDays: 30,
        resinationDays: 15,
        responsiblePerson: "Carlos Pérez",
        responsiblePersonPosition: "Encargado",
        emailResponsiblePerson: "carlos@empresa.com",
      };
  
      await generateContract(
        person,
        warehouse,
        formData.rentalPrice,
        new Date(),
        new Date(),
        new Date(),
        365,
        30,
        15,
        "Condiciones estándar del contrato..."
      );
    };
  
    return (
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className="form-container" >
          <div className="form-header-bar">
            <span>Gestión de Contratos</span>
          </div>
  
          <div className="form-header">
            <p>Completa los datos del cliente y la bodega</p>
          </div>
  
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre Empresa</label>
              <input
                placeholder="Nombre de la empresa"
                value={formData.CompanyName}
                onChange={(e) => setFormData({ ...formData, CompanyName: e.target.value })}
              />
            </div>
  
            <div className="form-group">
              <label>RUT Empresa</label>
              <input
                placeholder="Ej: 78.345.678-9"
                value={formData.rutEmpresa}
                onChange={(e) => setFormData({ ...formData, rutEmpresa: e.target.value })}
              />
            </div>
  
            <div className="form-group">
              <label>Dirección</label>
              <input
                placeholder="Dirección del cliente"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Comuna</label>
              <input
                placeholder="Comuna del cliente"
                value={formData.comuna}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Nombre de bodega</label>
              <input
                placeholder="Ej: Bodega Central"
                value={formData.warehouseName}
                onChange={(e) =>
                  setFormData({ ...formData, warehouseName: e.target.value })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Metros cuadrados</label>
              <input
                type="number"
                placeholder="0"
                value={formData.capacity}
                onChange={(e) =>
                  setFormData({ ...formData, capacity: Number(e.target.value) })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Precio de arriendo</label>
              <input
                type="number"
                placeholder="250000"
                value={formData.rentalPrice}
                onChange={(e) =>
                  setFormData({ ...formData, rentalPrice: Number(e.target.value) })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Fecha de llegada de material</label>
              <input
                type="date"
                value={formData.materialDeliveryDate}
                onChange={(e) =>
                  setFormData({ ...formData, materialDeliveryDate: e.target.value })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Fecha inicio del contrato</label>
              <input
                type="date"
                value={formData.contractStartDate}
                onChange={(e) =>
                  setFormData({ ...formData, contractStartDate: e.target.value })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Fecha fin del contrato</label>
              <input
                type="date"
                value={formData.contractEndDate}
                onChange={(e) =>
                  setFormData({ ...formData, contractEndDate: e.target.value })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Duración del contrato</label>
              <input
                type="number"
                placeholder="0"
                value={formData.extensionDeadlineDays}
                onChange={(e) =>
                  setFormData({ ...formData, extensionDeadlineDays: Number(e.target.value) })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Plazo de retractación</label>
              <input
                type="number"
                placeholder="0"
                value={formData.resinationDays}
                onChange={(e) =>
                  setFormData({ ...formData, resinationDays: Number(e.target.value) })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Nombre Encargado</label>
              <input
                placeholder="Ej: Carlos Pérez"
                value={formData.responsiblePerson}
                onChange={(e) =>
                  setFormData({ ...formData, responsiblePerson: e.target.value })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Cargo Encargado</label>
              <input
                placeholder="Ej: Encargado"
                value={formData.responsiblePersonPosition}
                onChange={(e) =>
                  setFormData({ ...formData, responsiblePersonPosition: e.target.value })
                }
              />
            </div>
  
            <div className="form-group">
              <label>Email Encargado</label>
              <input
                placeholder="Ej: carlosperez@gmail.com"
                value={formData.emailResponsiblePerson}
                onChange={(e) =>
                  setFormData({ ...formData, emailResponsiblePerson: e.target.value })
                }
              />
            </div>
  
            <button type="submit" disabled={loading}>
              {loading ? "Generando..." : "Generar Contrato"}
            </button>
          </form>
  
          {error && <p style={{ color: "red", marginTop: "15px" }}>{error}</p>}
  
          {contract && (
            <div style={{ marginTop: "25px" }}>
              <h3>Contrato generado</h3>
              <p>ID: {contract.id}</p>
              <p>Cliente: {contract.party.name}</p>
              <p>Bodega: {contract.warehouse.name}</p>
              <p>Valor: ${contract.rentalPrice}</p>
            </div>
          )}
        </div>
      </main>
  );
};
