﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Квитанция.
    /// </summary>
    // *** Start programmer edit section *** (Квитанция CustomAttributes)

    // *** End programmer edit section *** (Квитанция CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КвитанцияE", new string[] {
            "IDжильца as \'I dжильца\'",
            "IDорганизация as \'I dорганизация\'",
            "РасчетныйПериод as \'Расчетный период\'",
            "СуммаКОплате as \'Сумма к оплате\'",
            "IDсотрудника as \'I dсотрудника\'"})]
    [View("КвитанцияL", new string[] {
            "IDжильца as \'I dжильца\'",
            "IDорганизация as \'I dорганизация\'",
            "РасчетныйПериод as \'Расчетный период\'",
            "СуммаКОплате as \'Сумма к оплате\'",
            "IDсотрудника as \'I dсотрудника\'"})]
    public class Квитанция : ICSSoft.STORMNET.DataObject
    {
        
        private int fIDорганизация;
        
        private int fIDжильца;
        
        private int fСуммаКОплате;
        
        private int fРасчетныйПериод;
        
        private int fIDсотрудника;
        
        private IIS.1.Жилец fЖилец;
        
        private IIS.1.Организация fОрганизация;
        
        private IIS.1.Сотрудники fСотрудники;
        
        private IIS.1.DetailArrayOfТЧквитанции fТЧквитанции;
        
        // *** Start programmer edit section *** (Квитанция CustomMembers)

        // *** End programmer edit section *** (Квитанция CustomMembers)

        
        /// <summary>
        /// IDжильца.
        /// </summary>
        // *** Start programmer edit section *** (Квитанция.IDжильца CustomAttributes)

        // *** End programmer edit section *** (Квитанция.IDжильца CustomAttributes)
        public virtual int IDжильца
        {
            get
            {
                // *** Start programmer edit section *** (Квитанция.IDжильца Get start)

                // *** End programmer edit section *** (Квитанция.IDжильца Get start)
                int result = this.fIDжильца;
                // *** Start programmer edit section *** (Квитанция.IDжильца Get end)

                // *** End programmer edit section *** (Квитанция.IDжильца Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Квитанция.IDжильца Set start)

                // *** End programmer edit section *** (Квитанция.IDжильца Set start)
                this.fIDжильца = value;
                // *** Start programmer edit section *** (Квитанция.IDжильца Set end)

                // *** End programmer edit section *** (Квитанция.IDжильца Set end)
            }
        }
        
        /// <summary>
        /// IDорганизация.
        /// </summary>
        // *** Start programmer edit section *** (Квитанция.IDорганизация CustomAttributes)

        // *** End programmer edit section *** (Квитанция.IDорганизация CustomAttributes)
        public virtual int IDорганизация
        {
            get
            {
                // *** Start programmer edit section *** (Квитанция.IDорганизация Get start)

                // *** End programmer edit section *** (Квитанция.IDорганизация Get start)
                int result = this.fIDорганизация;
                // *** Start programmer edit section *** (Квитанция.IDорганизация Get end)

                // *** End programmer edit section *** (Квитанция.IDорганизация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Квитанция.IDорганизация Set start)

                // *** End programmer edit section *** (Квитанция.IDорганизация Set start)
                this.fIDорганизация = value;
                // *** Start programmer edit section *** (Квитанция.IDорганизация Set end)

                // *** End programmer edit section *** (Квитанция.IDорганизация Set end)
            }
        }
        
        /// <summary>
        /// IDсотрудника.
        /// </summary>
        // *** Start programmer edit section *** (Квитанция.IDсотрудника CustomAttributes)

        // *** End programmer edit section *** (Квитанция.IDсотрудника CustomAttributes)
        public virtual int IDсотрудника
        {
            get
            {
                // *** Start programmer edit section *** (Квитанция.IDсотрудника Get start)

                // *** End programmer edit section *** (Квитанция.IDсотрудника Get start)
                int result = this.fIDсотрудника;
                // *** Start programmer edit section *** (Квитанция.IDсотрудника Get end)

                // *** End programmer edit section *** (Квитанция.IDсотрудника Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Квитанция.IDсотрудника Set start)

                // *** End programmer edit section *** (Квитанция.IDсотрудника Set start)
                this.fIDсотрудника = value;
                // *** Start programmer edit section *** (Квитанция.IDсотрудника Set end)

                // *** End programmer edit section *** (Квитанция.IDсотрудника Set end)
            }
        }
        
        /// <summary>
        /// РасчетныйПериод.
        /// </summary>
        // *** Start programmer edit section *** (Квитанция.РасчетныйПериод CustomAttributes)

        // *** End programmer edit section *** (Квитанция.РасчетныйПериод CustomAttributes)
        public virtual int РасчетныйПериод
        {
            get
            {
                // *** Start programmer edit section *** (Квитанция.РасчетныйПериод Get start)

                // *** End programmer edit section *** (Квитанция.РасчетныйПериод Get start)
                int result = this.fРасчетныйПериод;
                // *** Start programmer edit section *** (Квитанция.РасчетныйПериод Get end)

                // *** End programmer edit section *** (Квитанция.РасчетныйПериод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Квитанция.РасчетныйПериод Set start)

                // *** End programmer edit section *** (Квитанция.РасчетныйПериод Set start)
                this.fРасчетныйПериод = value;
                // *** Start programmer edit section *** (Квитанция.РасчетныйПериод Set end)

                // *** End programmer edit section *** (Квитанция.РасчетныйПериод Set end)
            }
        }
        
        /// <summary>
        /// СуммаКОплате.
        /// </summary>
        // *** Start programmer edit section *** (Квитанция.СуммаКОплате CustomAttributes)

        // *** End programmer edit section *** (Квитанция.СуммаКОплате CustomAttributes)
        public virtual int СуммаКОплате
        {
            get
            {
                // *** Start programmer edit section *** (Квитанция.СуммаКОплате Get start)

                // *** End programmer edit section *** (Квитанция.СуммаКОплате Get start)
                int result = this.fСуммаКОплате;
                // *** Start programmer edit section *** (Квитанция.СуммаКОплате Get end)

                // *** End programmer edit section *** (Квитанция.СуммаКОплате Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Квитанция.СуммаКОплате Set start)

                // *** End programmer edit section *** (Квитанция.СуммаКОплате Set start)
                this.fСуммаКОплате = value;
                // *** Start programmer edit section *** (Квитанция.СуммаКОплате Set end)

                // *** End programmer edit section *** (Квитанция.СуммаКОплате Set end)
            }
        }
        
        /// <summary>
        /// Квитанция.
        /// </summary>
        // *** Start programmer edit section *** (Квитанция.Жилец CustomAttributes)

        // *** End programmer edit section *** (Квитанция.Жилец CustomAttributes)
        [PropertyStorage(new string[] {
                "Жилец"})]
        [NotNull()]
        public virtual IIS.1.Жилец Жилец
        {
            get
            {
                // *** Start programmer edit section *** (Квитанция.Жилец Get start)

                // *** End programmer edit section *** (Квитанция.Жилец Get start)
                IIS.1.Жилец result = this.fЖилец;
                // *** Start programmer edit section *** (Квитанция.Жилец Get end)

                // *** End programmer edit section *** (Квитанция.Жилец Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Квитанция.Жилец Set start)

                // *** End programmer edit section *** (Квитанция.Жилец Set start)
                this.fЖилец = value;
                // *** Start programmer edit section *** (Квитанция.Жилец Set end)

                // *** End programmer edit section *** (Квитанция.Жилец Set end)
            }
        }
        
        /// <summary>
        /// Квитанция.
        /// </summary>
        // *** Start programmer edit section *** (Квитанция.Организация CustomAttributes)

        // *** End programmer edit section *** (Квитанция.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.1.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (Квитанция.Организация Get start)

                // *** End programmer edit section *** (Квитанция.Организация Get start)
                IIS.1.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (Квитанция.Организация Get end)

                // *** End programmer edit section *** (Квитанция.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Квитанция.Организация Set start)

                // *** End programmer edit section *** (Квитанция.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (Квитанция.Организация Set end)

                // *** End programmer edit section *** (Квитанция.Организация Set end)
            }
        }
        
        /// <summary>
        /// Квитанция.
        /// </summary>
        // *** Start programmer edit section *** (Квитанция.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (Квитанция.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.1.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (Квитанция.Сотрудники Get start)

                // *** End programmer edit section *** (Квитанция.Сотрудники Get start)
                IIS.1.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (Квитанция.Сотрудники Get end)

                // *** End programmer edit section *** (Квитанция.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Квитанция.Сотрудники Set start)

                // *** End programmer edit section *** (Квитанция.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (Квитанция.Сотрудники Set end)

                // *** End programmer edit section *** (Квитанция.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Квитанция.
        /// </summary>
        // *** Start programmer edit section *** (Квитанция.ТЧквитанции CustomAttributes)

        // *** End programmer edit section *** (Квитанция.ТЧквитанции CustomAttributes)
        public virtual IIS.1.DetailArrayOfТЧквитанции ТЧквитанции
        {
            get
            {
                // *** Start programmer edit section *** (Квитанция.ТЧквитанции Get start)

                // *** End programmer edit section *** (Квитанция.ТЧквитанции Get start)
                if ((this.fТЧквитанции == null))
                {
                    this.fТЧквитанции = new IIS.1.DetailArrayOfТЧквитанции(this);
                }
                IIS.1.DetailArrayOfТЧквитанции result = this.fТЧквитанции;
                // *** Start programmer edit section *** (Квитанция.ТЧквитанции Get end)

                // *** End programmer edit section *** (Квитанция.ТЧквитанции Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Квитанция.ТЧквитанции Set start)

                // *** End programmer edit section *** (Квитанция.ТЧквитанции Set start)
                this.fТЧквитанции = value;
                // *** Start programmer edit section *** (Квитанция.ТЧквитанции Set end)

                // *** End programmer edit section *** (Квитанция.ТЧквитанции Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КвитанцияE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КвитанцияE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КвитанцияE", typeof(IIS.1.Квитанция));
                }
            }
            
            /// <summary>
            /// "КвитанцияL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КвитанцияL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КвитанцияL", typeof(IIS.1.Квитанция));
                }
            }
        }
    }
}
